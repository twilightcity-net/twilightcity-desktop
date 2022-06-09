import React, {Component} from "react";
import {Button, Popup} from "semantic-ui-react";

export default class FervieProfile extends Component {
  /**
   * builds our fervie profile image for the chat feed
   * @param props
   */
  constructor(props) {
    super(props);
    this.name = "[FervieProfile]";
    this.state = {
      hasBuddyBeenRequested: false
    }
  }

  render() {
    return (<div>{this.getFervieWithPopup()}</div>);
  }

  onClickAddBuddy = () => {
    this.setState({
      hasBuddyBeenRequested: true
    });
    this.props.onClickAddBuddy();
  }

  getBuddyContent() {
    if (!this.props.hasBuddyActions) return "";

    if (this.props.isBuddy) {
      return "Buddy"
    } else if (!this.state.hasBuddyBeenRequested) {
      return <Button size="tiny" color="violet" onClick={this.onClickAddBuddy}>Add Buddy</Button>
    } else {
      return "Buddy request pending..."
    }
  }

  getFervieWithPopup() {
    let popupContent = null;

    if (this.props.circuitMember) {
      popupContent = (<Popup.Content>
        <div className="name">{this.props.circuitMember.fervieName}</div>
        <div className="username">@{this.props.circuitMember.username}</div>

        <div className="buddy">{this.getBuddyContent()}</div>
      </Popup.Content>);
    }

    if (popupContent && this.props.showPopup) {
      return (<Popup
        className="ferviePopup"
        trigger={this.getFervieProfileSvg()}
        content={popupContent}
        position="bottom left"
        closeOnPortalMouseLeave={true}
        inverted
        hideOnScroll
      />);
    } else {
      return this.getFervieProfileSvg();
    }
  }

  getFervieProfileSvg(hasBorder) {

    let fervieColor = "#B042FF";
    let fervieAccessory;
    let fervieTertiaryColor;
    if (this.props.circuitMember) {
      if (this.props.circuitMember.fervieColor) {
        fervieColor = this.props.circuitMember.fervieColor;
      }
      fervieAccessory = this.props.circuitMember.fervieAccessory;
      fervieTertiaryColor = this.props.circuitMember.fervieTertiaryColor;
    }

    return (
      <svg
        preserveAspectRatio="none"
        x="0px"
        y="0px"
        width="262px"
        height="235px"
        viewBox="0 0 262 235"
      >
        <defs>
          <linearGradient
            id="Gradient_1"
            gradientUnits="userSpaceOnUse"
            x1="266.91249999999997"
            y1="167.71249999999998"
            x2="280.8875"
            y2="114.68749999999999"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#00C8FF" />

            <stop offset="100%" stopColor="#7F00FF" />
          </linearGradient>

          <linearGradient
            id="Gradient_2"
            gradientUnits="userSpaceOnUse"
            x1="169.71249999999998"
            y1="153.175"
            x2="178.6875"
            y2="98.125"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#00C8FF" />

            <stop offset="100%" stopColor="#7F00FF" />
          </linearGradient>

          <linearGradient
            id="Gradient_3"
            gradientUnits="userSpaceOnUse"
            x1="600.875"
            y1="153.2375"
            x2="602.625"
            y2="240.0625"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#191919" />

            <stop offset="100%" stopColor="#999999" />
          </linearGradient>

          <linearGradient
            id="Gradient_4"
            gradientUnits="userSpaceOnUse"
            x1="460.09999999999997"
            y1="149.225"
            x2="459.8"
            y2="255.07500000000002"
            spreadMethod="pad"
          >
            <stop offset="0%" stopColor="#191919" />

            <stop offset="100%" stopColor="#999999" />
          </linearGradient>
        </defs>

        <g id="bg">
          <g>
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  stroke="none"
                  d="
M 278 -10.95
L -4.95 -10.95 -4.95 251.05 278 251.05 278 -10.95 Z"
                />
              </g>
            </g>
          </g>
        </g>

        <g id="body">
          <g transform="matrix( 1, 0, 0, 1, -81.3,-54.9) ">
            <g>
              <g>
                <path
                  fill={fervieColor}
                  stroke="none"
                  d="
M 301.2 113.7
Q 273.35 78.25 228.65 72.8 183.9 67.35 148.5 95.1 112.95 122.95 107.5 167.6 102.05 212.3 129.85 247.8 157.6 283.35 202.35 288.8 247 294.25 282.55 266.4 318.05 238.7 323.5 194 328.9 149.25 301.2 113.7 Z"
                />
              </g>
            </g>

            <g>
              <path
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 323.5 194
Q 318.05 238.7 282.55 266.4 247 294.25 202.35 288.8 157.6 283.35 129.85 247.8 102.05 212.3 107.5 167.6 112.95 122.95 148.5 95.1 183.9 67.35 228.65 72.8 273.35 78.25 301.2 113.7 328.9 149.25 323.5 194 Z"
              />
            </g>
          </g>

          <g
            id="Layer_1"
            transform="matrix( 1, 0, 0, 1, 0.5,0.5) "
          >
            <g transform="matrix( 1, 0, 0, 1, -81.8,-55.4) ">
              <g>
                <g>
                  <path
                    fill={fervieColor}
                    stroke="none"
                    d="
M 251.1 271.05
Q 252.6 237.4 281.65 262.7
L 261.2 218.7 220.8 213.75 216.3 250.6
Q 227.4 223.55 251.1 271.05
M 81.8 164.4
Q 96.35 151.7 103.55 164.55 88.5 180.15 87.7 212.5 105.3 186.45 108.95 212.6 111.2 224.45 97.55 244.3 121.6326171875 223.440625 131.95 236.6 132.8634765625 237.7205078125 133.65 239.1 132.8634765625 237.7205078125 131.95 236.6
L 132 243.75
Q 162.65 224.65 156.05 257.65 190.55 217.25 194.85 246.2
L 199.3 209.4 158.85 204.45 133.7 234.55 134.95 107.35
Q 88 138.6 81.8 164.4
M 279.15 91.85
Q 257.7 74.15 284.5 78.8 259.6 52.5 230.5 72.2 215.3 44.2 164.45 62.9 196.85 62.95 203.15 82.6
L 279.15 91.85
M 327.2 191.85
Q 337.3 181.1 343.75 193.85 340.1 162.25 309.55 126.15
L 285.45 258.9
Q 296.2 250.3 313.8 270.7 311.25 239.05 314.75 228.8 320.25 212.65 333.7 251.25 346.2 216.05 327.2 191.85 Z"
                  />
                </g>
              </g>

              <g>
                <path
                  stroke="#000000"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  fill="none"
                  d="
M 309.55 126.15
Q 340.1 162.25 343.75 193.85 337.3 181.1 327.2 191.85 346.2 216.05 333.7 251.25 320.25 212.65 314.75 228.8 311.25 239.05 313.8 270.7 296.2 250.3 285.45 258.9
M 203.15 82.6
Q 196.85 62.95 164.45 62.9 215.3 44.2 230.5 72.2 259.6 52.5 284.5 78.8 257.7 74.15 279.15 91.85
M 134.95 107.35
Q 88 138.6 81.8 164.4 96.35 151.7 103.55 164.55 88.5 180.15 87.7 212.5 105.3 186.45 108.95 212.6 111.2 224.45 97.55 244.3 121.6326171875 223.440625 131.975 236.6 132.8634765625 237.7205078125 133.65 239.1"
                />
              </g>
            </g>
          </g>
        </g>

        <g id="mouth">
          <g transform="matrix( 1.2175750732421875, 0.21356201171875, -0.21356201171875, 1.2175750732421875, -202.25,-168.85) ">
            <g>
              <g>
                <path
                  fill="#000000"
                  stroke="none"
                  d="
M 368.8 190
Q 347.3 200.45 325.8 202.75 324.15 202.9 322.5 203.05 313.65 203.75 304.8 203.05 298.6 202.55 292.45 201.35 275.65 198.15 258.85 190 275.65 217.3 292.45 220.5 298.6 221.7 304.8 222.2 313.65 222.9 322.5 222.2 324.15 222.05 325.8 221.9 347.3 219.6 368.8 190 Z"
                />
              </g>
            </g>

            <g transform="matrix( 0.796783447265625, -0.1397552490234375, 0.1397552490234375, 0.796783447265625, 184.7,106.25) ">
              <path
                stroke="#000000"
                strokeWidth="3"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 72.34252548217773 117.76979064941409
Q 91.0572563171387 131.28086929321287 110.8291191101074 138.76495132446288 118.06093139648436 141.53944778442386 125.50311584472655 143.4723197937012 136.1291618347168 146.21464614868162 147.05419464111327 147.25236740112305 149.09522781372073 147.42210845947264 151.13626098632812 147.59184951782228 177.8053176879883 149.38301010131838 206.21490478515625 141.25093383789064 173.7156051635742 172.69957275390627 147.04654846191409 170.90841217041017 145.00551528930663 170.73867111206053 142.96448211669923 170.56893005371094 132.03944931030276 169.5312088012695 121.41340332031251 166.78888244628908 113.97121887207032 164.85601043701175 106.73940658569336 162.08151397705078 86.9675437927246 154.59743194580076 72.34252548217773 117.76979064941409 Z"
              />
            </g>
          </g>

          <g transform="matrix( 1.2175750732421875, 0.21356201171875, -0.21356201171875, 1.2175750732421875, -202.25,-168.85) ">
            <g>
              <g>
                <path
                  fill="#660000"
                  stroke="none"
                  d="
M 312.15 214
Q 305.3 210.2 298.25 222.25 318.2 225.2 330.85 221.8 324.9 210.25 312.15 214 314.75 215.7 317.25 219.25 314.75 215.7 312.15 214 Z"
                />
              </g>
            </g>

            <g transform="matrix( 0.796783447265625, -0.1397552490234375, 0.1397552490234375, 0.796783447265625, 184.7,106.25) ">
              <path
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 132.11378860473633 158.37444763183592
Q 148.43872833251953 156.53145675659178 153.21665878295897 171.86514282226565 137.08822326660157 173.30333862304687 113.42760848999023 165.45093002319337 124.5849349975586 152.2847625732422 132.11378860473633 158.37444763183592 Z
M 132.11378860473633 158.37444763183592
Q 134.91642837524415 160.9995864868164 137.20222091674805 165.85588302612305"
              />
            </g>
          </g>
        </g>

        <g
          id="eyes"
          style={
            !fervieAccessory
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <g transform="matrix( 0.999053955078125, 0.03857421875, -0.03857421875, 0.999053955078125, -18.3,-6.1) ">
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  stroke="none"
                  d="
M 107.15 72.55
Q 105.85 82.95 112.35 91.25 118.9 99.5 129.25 100.8 139.65 102.05 148 95.55 156.2 89.1 157.5 78.7 158.75 68.25 152.3 60 145.8 51.8 135.4 50.5 125.05 49.25 116.7 55.7 108.4 62.1 107.15 72.55 Z"
                />
              </g>
            </g>

            <g transform="matrix( 0.99945068359375, -0.0385894775390625, 0.0385894775390625, 0.99945068359375, 18.5,5.35) ">
              <path
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 136.01520690917968 78.60098571777344
Q 134.31526489257809 88.94100036621093 125.87421875 95.06858978271485 117.28138580322265 101.24034576416017 106.93944244384765 99.59035644531251 96.64938049316407 97.89234313964845 90.42381439208984 89.39748687744141 84.25012969970703 80.85460662841797 85.9500717163086 70.51459197998048 87.60198974609376 60.122695922851555 96.1410125732422 54.04891662597657 104.73191680908204 47.92711334228515 115.02390747070312 49.575173950195314 125.36392211914064 51.27511596679687 131.54146423339844 59.718090820312504 137.66712493896483 68.20908966064454 136.01520690917968 78.60098571777344 Z"
              />
            </g>
          </g>

          <g transform="matrix( 1.724853515625, 0.27813720703125, -0.27813720703125, 1.724853515625, -101.2,-251.25) ">
            <g>
              <g>
                <path
                  fill="#000000"
                  stroke="none"
                  d="
M 154.85 177.35
Q 156.8 175.35 156.8 172.55 156.8 169.75 154.85 167.8 152.85 165.8 150.05 165.8 147.25 165.8 145.25 167.8 143.3 169.75 143.3 172.55 143.3 175.35 145.25 177.35 147.25 179.35 150.05 179.35 152.85 179.35 154.85 177.35 Z"
                />
              </g>
            </g>

            <g transform="matrix( 0.5650634765625, -0.0911102294921875, 0.0911102294921875, 0.5650634765625, 80.05,132.75) ">
              <path
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 121.2644561767578 89.98538818359373
Q 120.4856719970703 94.81497802734373 116.56593322753905 97.72231750488282 112.55995178222655 100.61575012207032 107.73036193847655 99.83696594238279 102.90077209472655 99.05818176269531 100.00733947753905 95.05220031738281 97.20014953613286 91.06012573242185 97.97893371582033 86.23053588867185 98.75771789550784 81.40094604492185 102.66354980468749 78.57984924316406 106.66953124999999 75.68641662597656 111.49912109374999 76.46520080566404 116.32871093749999 77.24398498535157 119.22214355468749 81.24996643066407 122.04324035644531 85.15579833984373 121.2644561767578 89.98538818359373 Z"
              />
            </g>
          </g>

          <g transform="matrix( 0.999053955078125, 0.03857421875, -0.03857421875, 0.999053955078125, -18.3,-6.1) ">
            <g>
              <g>
                <path
                  fill="#FFFFFF"
                  stroke="none"
                  d="
M 175.35 61.05
Q 166.3 68.15 164.9 79.6 163.5 91.05 170.65 100.1 177.7 109.1 189.1 110.5 200.6 111.9 209.7 104.85 218.7 97.8 220.1 86.35 221.5 74.9 214.4 65.8 207.35 56.7 195.85 55.3 184.45 53.95 175.35 61.05 Z"
                />
              </g>
            </g>

            <g transform="matrix( 0.99945068359375, -0.0385894775390625, 0.0385894775390625, 0.99945068359375, 18.5,5.35) ">
              <path
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 198.2608917236328 88.65849456787109
Q 196.4205413818359 100.04365844726563 187.15710754394527 106.7398208618164 177.79376831054688 113.4321258544922 166.35865173339843 111.58984680175782 155.02344055175777 109.75142517089843 148.327278137207 100.48799133300781 141.53313903808592 91.17074737548829 143.37348937988278 79.78558349609375 145.2138397216797 68.40041961669924 154.5291549682617 61.65623321533203 163.89442291259763 54.91397552490235 175.23156280517577 56.702444458007804 186.66667938232422 58.544723510742195 193.35898437499998 67.90806274414064 200.1012420654297 77.27333068847658 198.2608917236328 88.65849456787109 Z"
              />
            </g>
          </g>

          <g transform="matrix( 1.8939056396484375, 0.3054656982421875, -0.3054656982421875, 1.8939056396484375, -62.45,-273.4) ">
            <g>
              <g>
                <path
                  fill="#000000"
                  stroke="none"
                  d="
M 154.85 177.35
Q 156.8 175.35 156.8 172.55 156.8 169.75 154.85 167.8 152.85 165.8 150.05 165.8 147.25 165.8 145.25 167.8 143.3 169.75 143.3 172.55 143.3 175.35 145.25 177.35 147.25 179.35 150.05 179.35 152.85 179.35 154.85 177.35 Z"
                />
              </g>
            </g>

            <g transform="matrix( 0.514617919921875, -0.0829925537109375, 0.0829925537109375, 0.514617919921875, 54.8,135.5) ">
              <path
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 181.80629806518562 101.29043960571295
Q 180.95099411010744 106.5933753967285 176.64694671630855 109.7855285644531 172.2482040405273 112.9624084472656 166.94526824951174 112.10710449218749 161.64233245849607 111.25180053710938 158.46545257568357 106.85305786132812 155.38326797485354 102.46958847045897 156.2385719299317 97.16665267944342 157.09387588500982 91.86371688842775 161.3826499938965 88.76625900268562 165.78139266967776 85.58937911987312 171.08432846069343 86.44468307495123 176.38726425170898 87.29998703002934 179.56414413452148 91.69872970581059 182.66160202026373 95.98750381469728 181.80629806518562 101.29043960571295 Z"
              />
            </g>
          </g>
        </g>

        <g
          id="heartsunglasses"
          style={
            fervieAccessory === "HEARTGLASSES"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <g transform="matrix( 1, 0, 0, 1, -80.25,-56) ">
            <g>
              <g>
                <path
                  fill={fervieTertiaryColor}
                  stroke="none"
                  d="
M 135.05 98.95
Q 136.25 97.3 137.5 95.85 134.45 94.15 132.5 94.55 129.45 95.1 129.05 97.2 130.1 101.95 132.35 103.85 133.5 101.4 135.05 98.95
M 235.4 114.75
Q 236.55 113.05 237.9 111.65 229.35 102.85 218.45 108.7 219.2 110.4 219.75 112.25 220.25 113.8 220.6 115.3 228.3 110.9 233.6 117.5 234.4 116.1 235.4 114.75
M 326.9 126.3
Q 327.3 124.55 325.3 123.05 321.5 121.85 317.7 122.4 319.25 125.55 320.05 128.1 320.45 129.7 320.8 131.2 325.9 130.2 326.9 126.3 Z"
                />

                <path
                  fill={fervieTertiaryColor}
                  stroke="none"
                  d="
M 237.9 111.65
Q 236.55 113.05 235.4 114.75 234.4 116.1 233.6 117.5 225.3 131 230.35 146 236 162.65 249.7 173.45 256.35 180.95 267.3 187.7 279.8 184.65 288.35 179.55 304.05 173.6 314.4 159.45 323.75 146.65 320.8 131.2 320.45 129.7 320.05 128.1 319.25 125.55 317.7 122.4 313.55 113.85 302.75 109.75 289.95 107.5 278 114.35 270.4 104.4 257.55 102.65 245.35 103.25 237.9 111.65
M 236.4 135.15
Q 236.45 132.55 236.7 130.15 237.85 120.65 243 115.6 246.3 112.4 251.15 110.9 265.5 106.7 276.85 121.75 288.9 114.25 298.7 116.35 302.6 117.15 306.2 119.6 310.95 122.8 313.05 127.5 316.5 135.25 312.85 147.2 310.85 157.5 297.05 167 286.2 174.35 268.1 181.15 254.6 170.35 246.85 160.8 235.05 146.4 236.4 135.15
M 242.15 159.45
Q 231.7 148.05 233.3 135.1 235.4 146.9 242.15 159.45
M 290.75 112.8
Q 300.5 109.05 308.65 115.6 300.1 111.75 290.75 112.8
M 249.2 106.65
Q 261.2 101.1 271 110.1 260.95 105.05 249.2 106.65
M 316.9 151
Q 313.3 160.1 304.7 165.95 318.9 150.85 317.85 133.25 320.55 141.85 316.9 151
M 202.4 93.95
Q 189.65 91.7 179.35 98.8 170.05 88.6 157.2 86.85 144.95 87.4 137.5 95.85 136.25 97.3 135.05 98.95 133.5 101.4 132.35 103.85 126.25 116.65 130.85 130.55 136.3 147.2 149.4 157.65 156.05 165.15 166.95 171.9 179.5 168.85 188 163.75 204.45 157.65 214.85 143.6 224.4 130.8 220.6 115.3 220.25 113.8 219.75 112.25 219.2 110.4 218.45 108.7 213.9 98.3 202.4 93.95
M 205.9 103.8
Q 208.55 105.6 210.35 107.85 215.55 114.3 214.1 124.55 213.6 127.75 212.55 131.35 209.95 144.6 188.35 156.3 179.8 161 168.15 165.45 154.8 154.75 146.95 145.4 134.7 130.75 136.1 119.3 136.3 103.8 145.2 97.75 147.65 96.05 150.8 95.1 154.1 94.15 157.35 94.25 168.15 94.4 178.2 106.2 193.55 95.4 205.9 103.8
M 216.4 132.45
Q 213.95 145.25 200.55 152.9 210.8 143.05 216.4 132.45
M 188.3 97.05
Q 200.3 91.5 210.1 100.5 199.3 95.3 188.3 97.05
M 131.95 121.85
Q 131.35 112 136.55 104.7 130.1 121.1 139 139.8 132.55 131.65 131.95 121.85
M 150.75 90.75
Q 160.5 87 168.6 93.55 160.1 89.7 150.75 90.75 Z"
                />

                <path
                  fill="#FFFFFF"
                  stroke="none"
                  d="
M 304.7 165.95
Q 313.3 160.1 316.9 151 320.55 141.85 317.85 133.25 318.9 150.85 304.7 165.95
M 271 110.1
Q 261.2 101.1 249.2 106.65 260.95 105.05 271 110.1
M 308.65 115.6
Q 300.5 109.05 290.75 112.8 300.1 111.75 308.65 115.6
M 233.3 135.1
Q 231.7 148.05 242.15 159.45 235.4 146.9 233.3 135.1
M 168.6 93.55
Q 160.5 87 150.75 90.75 160.1 89.7 168.6 93.55
M 136.55 104.7
Q 131.35 112 131.95 121.85 132.55 131.65 139 139.8 130.1 121.1 136.55 104.7
M 210.1 100.5
Q 200.3 91.5 188.3 97.05 199.3 95.3 210.1 100.5
M 200.55 152.9
Q 213.95 145.25 216.4 132.45 210.8 143.05 200.55 152.9 Z"
                />

                <path
                  fill="url(#Gradient_1)"
                  stroke="none"
                  d="
M 236.7 130.15
Q 236.45 132.55 236.4 135.15 235.05 146.4 246.85 160.8 254.6 170.35 268.1 181.15 286.2 174.35 297.05 167 310.85 157.5 312.85 147.2 316.5 135.25 313.05 127.5 310.95 122.8 306.2 119.6 302.6 117.15 298.7 116.35 288.9 114.25 276.85 121.75 265.5 106.7 251.15 110.9 246.3 112.4 243 115.6 237.85 120.65 236.7 130.15 Z"
                />

                <path
                  fill="url(#Gradient_2)"
                  stroke="none"
                  d="
M 210.35 107.85
Q 208.55 105.6 205.9 103.8 193.55 95.4 178.2 106.2 168.15 94.4 157.35 94.25 154.1 94.15 150.8 95.1 147.65 96.05 145.2 97.75 136.3 103.8 136.1 119.3 134.7 130.75 146.95 145.4 154.8 154.75 168.15 165.45 179.8 161 188.35 156.3 209.95 144.6 212.55 131.35 213.6 127.75 214.1 124.55 215.55 114.3 210.35 107.85 Z"
                />
              </g>
            </g>

            <g>
              <path
                stroke="#000000"
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 317.7 122.4
Q 321.5 121.85 325.3 123.05 327.3 124.55 326.9 126.3 325.9 130.2 320.8 131.2 323.75 146.65 314.4 159.45 304.05 173.6 288.35 179.55 279.8 184.65 267.3 187.7 256.35 180.95 249.7 173.45 236 162.65 230.35 146 225.3 131 233.6 117.5 228.3 110.9 220.6 115.3 224.4 130.8 214.85 143.6 204.45 157.65 188 163.75 179.5 168.85 166.95 171.9 156.05 165.15 149.4 157.65 136.3 147.2 130.85 130.55 126.25 116.65 132.35 103.85 130.1 101.95 129.05 97.2 129.45 95.1 132.5 94.55 134.45 94.15 137.5 95.85 144.95 87.4 157.2 86.85 170.05 88.6 179.35 98.8 189.65 91.7 202.4 93.95 213.9 98.3 218.45 108.7 229.35 102.85 237.9 111.65 245.35 103.25 257.55 102.65 270.4 104.4 278 114.35 289.95 107.5 302.75 109.75 313.55 113.85 317.7 122.4 319.25 125.55 320.05 128.1 320.45 129.7 320.8 131.2
M 237.9 111.65
Q 236.55 113.05 235.4 114.75 234.4 116.1 233.6 117.5
M 168.15 165.45
Q 179.8 161 188.35 156.3 209.95 144.6 212.55 131.35 213.6 127.75 214.1 124.55 215.55 114.3 210.35 107.85 208.55 105.6 205.9 103.8 193.55 95.4 178.2 106.2 168.15 94.4 157.35 94.25 154.1 94.15 150.8 95.1 147.65 96.05 145.2 97.75 136.3 103.8 136.1 119.3 134.7 130.75 146.95 145.4 154.8 154.75 168.15 165.45 Z
M 218.45 108.7
Q 219.2 110.4 219.75 112.25 220.25 113.8 220.6 115.3
M 268.1 181.15
Q 254.6 170.35 246.85 160.8 235.05 146.4 236.4 135.15 236.45 132.55 236.7 130.15 237.85 120.65 243 115.6 246.3 112.4 251.15 110.9 265.5 106.7 276.85 121.75 288.9 114.25 298.7 116.35 302.6 117.15 306.2 119.6 310.95 122.8 313.05 127.5 316.5 135.25 312.85 147.2 310.85 157.5 297.05 167 286.2 174.35 268.1 181.15 Z
M 137.5 95.85
Q 136.25 97.3 135.05 98.95 133.5 101.4 132.35 103.85"
              />
            </g>
          </g>
        </g>

        <g
          id="shades"
          style={
            fervieAccessory === "SUNGLASSES"
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <g transform="matrix( 0.606048583984375, 0.090057373046875, -0.090057373046875, 0.606048583984375, -166.2,-71) ">
            <g>
              <g>
                <path
                  fill={fervieTertiaryColor}
                  stroke="none"
                  d="
M 662.4 157.05
Q 663.6 153.9 666.9 153.55 668.3 145.3 664 137.05 598.5 125.2 563 137.05 532.05 143 501 137.05 453 123.05 397 137.05 393.55 145.8 394.95 154.05 398.25 154.4 399.45 157.55 399.9 168.7 404.4 185.2 408.95 201.7 421.4 213 433.9 224.25 451.65 225.3 469.45 226.35 494.7 209.7 519.95 193 519.4 169.55
L 520.45 160.55
Q 531.45 152.15 542.45 160.55
L 542.45 169.05
Q 541.9 192.5 567.15 209.2 592.4 225.85 610.2 224.8 627.95 223.75 640.45 212.5 652.9 201.2 657.45 184.7 661.95 168.2 662.4 157.05
M 483.45 209.8
Q 445.75 227.85 424.45 207.75 403.15 187.65 410.85 151.55 459.85 123.55 508.85 151.55 521.15 191.7 483.45 209.8
M 637.4 207.25
Q 616.1 227.35 578.4 209.3 540.7 191.2 553 151.05 602 123.05 651 151.05 658.7 187.15 637.4 207.25 Z"
                />

                <path
                  fill="url(#Gradient_3)"
                  stroke="none"
                  d="
M 578.4 209.3
Q 616.1 227.35 637.4 207.25 658.7 187.15 651 151.05 602 123.05 553 151.05 540.7 191.2 578.4 209.3 Z"
                />

                <path
                  fill="url(#Gradient_4)"
                  stroke="none"
                  d="
M 424.45 207.75
Q 445.75 227.85 483.45 209.8 521.15 191.7 508.85 151.55 459.85 123.55 410.85 151.55 403.15 187.65 424.45 207.75 Z"
                />
              </g>
            </g>

            <g transform="matrix( 1.6143798828125, -0.2398834228515625, 0.2398834228515625, 1.6143798828125, 285.3,74.75) ">
              <path
                stroke={fervieTertiaryColor}
                strokeWidth="1"
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                d="
M 62.05892486572267 47.811735534667974
Q 97.2584487915039 44.37026824951171 125.08797760009764 57.177702331542974 143.36994476318358 63.57997283935546 162.6629898071289 62.761259460449224 185.24489440917972 58.77662048339846 223.87389678955077 71.8570541381836 225.73693237304684 77.24420166015625 224.145491027832 82.11802215576171 222.1140106201172 82.03294982910157 221.10307159423826 83.83393402099608 219.8262100219727 90.55084991455078 215.6130447387696 100.14539337158203 211.3695770263672 109.73543395996091 202.80662384033207 115.46256866455079 194.21787109375003 121.15489807128907 183.36594848632814 120.19273071289064 172.48372344970704 119.22606048583981 158.68045196533205 106.86140289306638 144.88168334960938 94.46644287109376 147.32685546875 80.30413513183595
L 148.09234313964845 75.15272216796876
Q 142.18229064941409 69.0712829589844 134.7592742919922 73.17145996093751
L 133.3124069213867 78.53133697509764
Q 131.53388824462894 92.79270782470704 114.72720336914062 100.6397705078125 97.92502136230468 108.45653076171874 87.23191680908204 106.21715850830077 76.5691146850586 103.98228912353517 70.00665283203125 96.03852539062501 63.47899627685547 88.06896209716797 62.207421874999994 77.65939941406248 60.966149902343744 67.25433959960935 61.69756774902345 60.45637207031251 61.253990173339844 58.43925018310546 59.285549926757824 57.92994384765626 59.18005523681643 52.80396270751953 62.05892486572267 47.811735534667974 Z
M 128.5396270751953 66.6723571777344
Q 101.36485290527344 45.290185546874994 69.14686584472659 57.84673461914065 61.229220581054676 79.03164672851562 72.32790222167966 93.1314453125 83.42658386230471 107.23124389648436 107.90015106201167 99.6872299194336 132.37822113037112 92.11291351318357 128.5396270751953 66.6723571777344 Z
M 155.3417007446289 70.34536590576172
Q 187.55968780517577 57.78881683349607 214.73446197509764 79.17098846435547 216.14996490478518 101.74278411865237 201.43097686767578 112.00613861083986 186.71198883056644 122.26949310302734 165.48949279785154 107.93515319824218 144.27149963378912 93.57051086425781 155.3417007446289 70.34536590576172 Z"
              />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
