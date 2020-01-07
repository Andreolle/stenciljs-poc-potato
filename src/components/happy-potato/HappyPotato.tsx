import {
  Component,
  Prop,
  State,
  getAssetPath,
  h
} from '@stencil/core';

@Component({
  tag: 'happy-potato',
  assetsDirs: ['assets'],
  styleUrl: 'happy-potato.scss',
  shadow: true
})
export class HappyPotato {
  @Prop() normal = "happy-potato.png";
  @Prop() dizzy = "happy-potato-dizzy.png";
  @Prop() yey = "happy-potato-yey.png";
  @State() potatoIs: string = "normal";
  @State() isBouncing: boolean = false;
  @State() counter: number = 0;

  private handleClick() {
    const {
      counter,
    } = this;

    this.counter = counter + 1;

    if (counter < 2) {
      this.potatoIs = "yey";
      this.isBouncing = true;
      setTimeout(() => {
        this.isBouncing = false;
        this.potatoIs = "normal";
      }, 1500)
    } else {
      this.potatoIs = "dizzy";
      this.isBouncing = true;
      setTimeout(() => {
        this.potatoIs = "normal";
        this.isBouncing = false;
        this.counter = 0;
      }, 1000)
    }
  }

  private selectImage(): string {
    return getAssetPath(`./assets/${this[this.potatoIs]}`);
  }

  render() {
    const {
      isBouncing,
      potatoIs,
    } = this;

    return (
      <div class="container">
        <div class="potato">
          <img
            class={ isBouncing && "bounce" }
            src={this.selectImage()}
            onClick={() => this.handleClick()}
            alt="Joe, the happiest potato"
          />
          {
            isBouncing && (
              <p class="text">
                {
                  potatoIs === "yey" ? "- Yeay" : "- meajuda"
                }
              </p>
            )
          }
        </div>
      </div>
    );
  }
}
