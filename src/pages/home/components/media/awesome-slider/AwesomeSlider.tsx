import React, { Component } from "react";
// import leftIcon from '../../../assets/icons/arrow-left.png'
// import rightIcon from '../../../assets/icons/arrow-right.png'
import "./style.sass";

interface State {
  slideWidth: number;
  slideHeight: number;
  slideMargin: number;
  children: JSX.Element[];
  slides: any[];
  middleSlideFixedIndex: any;
  currentSlide: number;
  block: boolean;
}

interface SelectedSlide {
  currentSlide: number;
  slidesJumpCount: number;
}

export default class ReactMagicalCarousel extends Component<{
  children: JSX.Element | JSX.Element[];
  slideWidth?: string;
  slideHeight?: string;
  ratio?: number;
  slideMargin?: string;
  renderDotBtns?: boolean;
  renderJumpBtns?: boolean;
  nextBtn?: (onJump: () => Promise<void>) => JSX.Element;
  previousBtn?: (onJump: () => Promise<void>) => JSX.Element;
  jumpInterval?: number;
  transition?: number;
  onSelectSlide?: Function;
  selectedSlide?: SelectedSlide;
  applyFocus?: boolean;
}> {
  state: State = {
    slideWidth: 0,
    slideHeight: 0,
    slideMargin: 0,
    children: [],
    slides: [],
    middleSlideFixedIndex: 1,
    currentSlide: 0,
    block: false,
  };
  sliderRef = React.createRef<any>();
  jumpInterval: any = null;

  componentDidMount() {
    if (this.props.children) {
      let children = Array.isArray(this.props.children)
        ? this.props.children
        : [this.props.children];
      // console.log(children);

      if (children.length > 0) {
        setTimeout(() => {
          this.setup();
        });
      }
    }

    window.addEventListener("resize", () => {
      setTimeout(() => {
        this.setup();
      });
    });
  }

  async setup() {
    if (!this.sliderRef.current) return;

    if (this.props.jumpInterval) {
      clearInterval(this.jumpInterval);
    }

    const sliderWidth = (this.sliderRef.current as HTMLElement).offsetWidth;
    let slideWidth = sliderWidth;
    let slideHeight = 500;
    let slideMargin = 0;

    if (this.props.slideWidth) {
      if (this.props.slideWidth.includes("%")) {
        const percentage = parseFloat(this.props.slideWidth.replace("%", ""));

        slideWidth = (sliderWidth / 100) * percentage;
      }
      if (this.props.slideWidth.includes("px")) {
        slideWidth = parseFloat(this.props.slideWidth.replace("px", ""));
      }
    }

    if (this.props.ratio) {
      slideHeight = this.props.ratio * slideWidth;
    }

    if (this.props.slideHeight) {
      if (this.props.slideHeight.includes("vh")) {
        const screenPercentage = parseFloat(
          this.props.slideHeight.replace("vh", "")
        );

        slideHeight = (window.innerHeight / 100) * screenPercentage;
      }
      if (this.props.slideHeight.includes("px")) {
        slideHeight = parseFloat(this.props.slideHeight.replace("px", ""));
      }
    }

    if (this.props.slideMargin) {
      if (this.props.slideMargin.includes("%")) {
        const percentage = parseFloat(this.props.slideMargin.replace("%", ""));

        slideMargin = (sliderWidth / 100) * percentage;
      }
      if (this.props.slideMargin.includes("px")) {
        slideMargin = parseFloat(this.props.slideMargin.replace("px", ""));
      }
    }

    let children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];

    let initialSlides = [...children].map((x, index) => ({
      content: x,
      left: 0,
      initialIndex: index,
      group: 0,
    }));

    let slidesForwards = [initialSlides]
      .map((x, group_index) => {
        x = x.map((x) => ({ ...x, group: group_index }));

        return x;
      })
      .flat();

    slidesForwards = slidesForwards.map((x, index) => ({
      ...x,
      left:
        (slideWidth + slideMargin) * index + (sliderWidth / 2 - slideWidth / 2),
      transition: this.props.transition
        ? this.props.transition / 1000 + "s"
        : "0.3s",
      scale: this.props.applyFocus && index === 0 ? "1.2" : "1",
    }));

    const startPoint = slidesForwards[0].left;

    const reverseSlides = [...slidesForwards]
      .reverse()
      .map((x, index) => ({
        ...x,
        left: startPoint - (slideWidth + slideMargin) * (index + 1),
      }))
      .reverse();

    const slides = [...reverseSlides, ...slidesForwards].map((x, index) => {
      x.group = Math.floor(index / children.length);

      return x;
    });

    // console.log({
    //   children,
    //   slides,
    //   middleSlideFixedIndex: reverseSlides.length,
    //   currentSlide: 0,
    //   sliderWidth,
    //   slideWidth,
    //   slideHeight,
    //   slideMargin,
    // });

    this.setState({
      children,
      slides,
      middleSlideFixedIndex: reverseSlides.length,
      currentSlide: 0,
      sliderWidth,
      slideWidth,
      slideHeight,
      slideMargin,
    });

    this.setJumpSliderInterval();
  }

  componentDidUpdate(
    prevProps: Readonly<Record<string, any>>,
    prevState: Readonly<Record<string, any>>,
    snapshot?: any
  ): void {
    if (this.props.children) {
      let children = Array.isArray(this.props.children)
        ? this.props.children
        : [this.props.children];

      if (this.state.children.length !== children.length) {
        setTimeout(() => {
          this.setup();
        });
      }
    }

    if (
      this.props.selectedSlide &&
      (this.props.selectedSlide.currentSlide !==
        prevProps.selectedSlide?.currentSlide ||
        this.props.selectedSlide.slidesJumpCount !==
          prevProps.selectedSlide?.slidesJumpCount)
    ) {
      !this.state.block &&
        this.onBtnClick(this.props.selectedSlide.slidesJumpCount);
    }
  }

  onSelectSlide = async (index: number) => {
    if (index - this.state.middleSlideFixedIndex === 0) return;
    if (this.state.block) return;

    if (this.props.jumpInterval) {
      clearInterval(this.jumpInterval);
    }

    this.setState({ block: true }, async () => {
      await this.moveSlider(index - this.state.middleSlideFixedIndex);

      setTimeout(
        () => {
          this.setState({ block: false });

          this.setJumpSliderInterval();
        },
        this.props.transition ? this.props.transition : 250
      );
    });
  };

  onSelectDot = (index: number) => {
    index - this.state.currentSlide !== 0 &&
      this.onBtnClick(index - this.state.currentSlide);
  };

  onBtnClick = async (slidesJumpCount: number) => {
    if (this.state.block) return;

    if (this.props.jumpInterval) {
      clearInterval(this.jumpInterval);
    }

    this.setState({ block: true }, async () => {
      await this.moveSlider(slidesJumpCount);

      setTimeout(
        () => {
          this.setState({ block: false });

          this.setJumpSliderInterval();
        },
        this.props.transition ? this.props.transition : 250
      );
    });
  };

  setJumpSliderInterval = () => {
    let children = Array.isArray(this.props.children)
      ? this.props.children
      : [this.props.children];

    if (this.props.jumpInterval && children.length > 1) {
      this.jumpInterval = setInterval(() => {
        this.onBtnClick(1);
      }, this.props.jumpInterval);
    }
  };

  moveSlider = async (slidesJumpCount: any) => {
    return new Promise((resolve, _) => {
      let slides: any[] = [];
      let slidesCopy = [...this.state.slides];

      slides = slides.map((x) => ({ ...x, transition: 0 }));

      this.setState({ slides }, () => {
        if (slidesJumpCount > 0) {
          const startPoint = slidesCopy[slidesCopy.length - 1].left;

          const firstSlides = slidesCopy
            .splice(0, slidesJumpCount)
            .map((x, index) => ({
              ...x,
              left:
                startPoint +
                (this.state.slideWidth + this.state.slideMargin) * (index + 1),
            }));

          slides = [...slidesCopy, ...firstSlides];
        } else {
          const startPoint = slidesCopy[0].left;

          const lastSlides = slidesCopy
            .splice(slidesJumpCount)
            .reverse()
            .map((x, index) => ({
              ...x,
              left:
                startPoint -
                (this.state.slideWidth + this.state.slideMargin) * (index + 1),
            }))
            .reverse();

          slides = [...lastSlides, ...slidesCopy];
        }

        slides = [...slides].map((x) => ({
          ...x,
          transition: this.props.transition
            ? this.props.transition / 1000 + "s"
            : "0.3s",
        }));

        this.setState({ slides }, () => {
          slides = [...slides].map((x, index) => {
            if (this.state.middleSlideFixedIndex === index) {
              this.props.onSelectSlide &&
                this.props.onSelectSlide({
                  currentSlide: x.initialIndex,
                  slidesJumpCount,
                });
              this.setState({ currentSlide: x.initialIndex });
            }

            return {
              ...x,
              left:
                x.left -
                (this.state.slideWidth + this.state.slideMargin) *
                  slidesJumpCount,
              scale:
                this.props.applyFocus &&
                this.state.middleSlideFixedIndex === index
                  ? "1.2"
                  : "1",
            };
          });

          setTimeout(() => {
            this.setState({ slides }, () => {
              resolve("");
            });
          });
        });
      });
    });
  };

  render() {
    return (
      <div
        ref={this.sliderRef}
        className="react-magical-carousel"
        style={{
          height:
            this.state.slideHeight +
            (this.props.applyFocus ? (this.state.slideHeight / 100) * 20 : 0) +
            "px",
        }}
      >
        {this.state.children.length > 1 && this.props.renderJumpBtns && (
          <>
            {this.props.previousBtn ? (
              this.props.previousBtn(() => this.onBtnClick(-1))
            ) : (
              <button
                className="previous jump-btn"
                onClick={() => this.onBtnClick(-1)}
              >
                {/* <img src={leftIcon} alt="previous-btn" /> */}
              </button>
            )}
            {this.props.nextBtn ? (
              this.props.nextBtn(() => this.onBtnClick(1))
            ) : (
              <button
                className="next jump-btn"
                onClick={() => this.onBtnClick(1)}
              >
                {/* <img src={rightIcon} alt="next-btn" /> */}
              </button>
            )}
          </>
        )}
        <div
          className="slider"
          style={{
            height: this.state.slideHeight + "px",
          }}
        >
          {this.state.slides.map((slide, index) => (
            <div
              key={"item_slide_" + index}
              onClick={() => this.onSelectSlide(index)}
              className={"slide"}
              style={{
                width: this.state.slideWidth + "px",
                height: this.state.slideHeight + "px",
                transition: slide.transition,
                scale: slide.scale,
                left: slide.left,
              }}
            >
              {slide.content}
            </div>
          ))}
        </div>
        {this.state.children.length > 1 && this.props.renderDotBtns && (
          <div className="navigation-dots">
            {this.state.children.map((_, index) => (
              <div
                className={
                  "dot " + (this.state.currentSlide === index ? "selected" : "")
                }
                onClick={() => this.onSelectDot(index)}
              ></div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
