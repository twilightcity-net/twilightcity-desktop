import React, { Component } from "react";
import { DimensionController } from "../../../../controllers/DimensionController";

/**
 * the 2d html canvas react component class used to load the graphic art for Fervie
 */
export default class FervieCanvas extends Component {
  /**
   * builds the canvas from properties
   * @param props - the components properties
   */
  constructor(props) {
    super(props);
    this.render3d = props.render3d;
    this.height = props.height;
    this.width = props.width;
    this.flameRating = 0;
  }

  /**
   * should render in 3d?
   */
  componentDidMount() {
    this.canvasEl = this.getCanvasEl();
    if (this.render3D === "true") {
      // TODO implement unity3d models and scene into this element
    } else {
      this.updateFervieImage(this.flameRating);
    }
  }

  /**
   * update the properties
   * @param nextProps
   */
  componentWillReceiveProps = nextProps => {
    this.updateFervieImage(this.flameRating);
  };

  /**
   * updates the fervie image on the screen
   * @param flameString
   */
  updateFervieImage(flameRating) {
  }

  /**
   * gets the htm canvase element
   * @returns {HTMLElement} - the dom from the viewport
   */
  getCanvasEl() {
    return document.getElementById("FervieCanvas");
  }

  /**
   * renders the component on the screen
   * @returns {*} - the JSX to render
   */
  render() {
    return (
        this.getFervieSvg()
    );
  }



  getFervieSvg() {
    return (
        <svg id="FervieCanvas" preserveAspectRatio="none" x="0px" y="0px" width="430px" height="525px" viewBox="0 0 430 525">
            <defs>
                <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="266.91249999999997"
                                y1="167.71249999999998" x2="280.8875" y2="114.68749999999999" spreadMethod="pad">
                    <stop offset="0%" stopColor="#00C8FF"/>

                    <stop offset="100%" stopColor="#7F00FF"/>
                </linearGradient>

                <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1="169.71249999999998" y1="153.175"
                                x2="178.6875" y2="98.125" spreadMethod="pad">
                    <stop offset="0%" stopColor="#00C8FF"/>

                    <stop offset="100%" stopColor="#7F00FF"/>
                </linearGradient>

                <linearGradient id="Gradient_3" gradientUnits="userSpaceOnUse" x1="601.0250000000001" y1="153.3875"
                                x2="602.875" y2="240.3125" spreadMethod="pad">
                    <stop offset="0%" stopColor="#191919"/>

                    <stop offset="100%" stopColor="#999999"/>
                </linearGradient>

                <linearGradient id="Gradient_4" gradientUnits="userSpaceOnUse" x1="460.34999999999997" y1="149.375"
                                x2="459.95" y2="255.325" spreadMethod="pad">
                    <stop offset="0%" stopColor="#191919"/>

                    <stop offset="100%" stopColor="#999999"/>
                </linearGradient>
            </defs>
            <g id="shoeback">
                <g transform="matrix( 1.236175537109375, 0, 0, 1.236175537109375, -11.7,-41.8) ">
                    <path fill="#777777" stroke="none" d="
	M 151 339.05
	Q 158.9 336.2 159.05 332.15
	L 159.05 332
	Q 159.05 327.85 151 324.9 142.95 322 131.55 322 120.15 322 112.1 324.9 106.25 327.05 104.65 329.8 104.05 330.85 104.05 332 104.05 336.15 112.1 339.05 120.15 342 131.55 342 142.95 342 151 339.05 Z"/>
                    <g transform="matrix( 0.8089447021484375, 0, 0, 0.8089447021484375, 9.45,33.8) ">
                        <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
	M 117.66576995849609 365.89069213867185
	Q 119.64365081787109 362.49120941162107 126.87527770996094 359.8334320068359 136.8264907836914 356.24852294921874 150.9188919067383 356.24852294921874 165.01129302978515 356.24852294921874 174.96250610351564 359.8334320068359 184.91371917724612 363.4801498413086 184.91371917724612 368.6102783203125
	L 184.91371917724612 368.79570465087886"/>
                    </g>
                </g>

                <g transform="matrix( -1.236175537109375, 0, 0, 1.236175537109375, 409.1,-41.8) ">
                    <path fill="#777777" stroke="none" d="
	M 151 339.05
	Q 158.9 336.2 159.05 332.15
	L 159.05 332
	Q 159.05 327.85 151 324.9 142.95 322 131.55 322 120.15 322 112.1 324.9 106.25 327.05 104.65 329.8 104.05 330.85 104.05 332 104.05 336.15 112.1 339.05 120.15 342 131.55 342 142.95 342 151 339.05 Z"/>
                    <g transform="matrix( -0.8089447021484375, 0, 0, 0.8089447021484375, 330.9,33.8) ">
                        <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
	M 279.7342300415039 365.89069213867185
	Q 277.75634918212893 362.49120941162107 270.5247222900391 359.8334320068359 260.5735092163086 356.24852294921874 246.48110809326172 356.24852294921874 232.38870697021488 356.24852294921874 222.4374938964844 359.8334320068359 212.4862808227539 363.4801498413086 212.4862808227539 368.6102783203125
	L 212.4862808227539 368.79570465087886"/>
                    </g>
                </g>
            </g>

            <g id="upperbody">
                <g id="body">
                    <path className="haircolor" fill={this.props.haircolor} stroke="none" d="
	M 301.2 113.7
	Q 273.35 78.25 228.65 72.8 183.9 67.35 148.5 95.1 112.95 122.95 107.5 167.6 102.05 212.3 129.85 247.8 157.6 283.35 202.35 288.8 247 294.25 282.55 266.4 318.05 238.7 323.5 194 328.9 149.25 301.2 113.7 Z"/>
                    <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round" fill="none"
                          d="
	M 323.5 194
	Q 318.05 238.7 282.55 266.4 247 294.25 202.35 288.8 157.6 283.35 129.85 247.8 102.05 212.3 107.5 167.6 112.95 122.95 148.5 95.1 183.9 67.35 228.65 72.8 273.35 78.25 301.2 113.7 328.9 149.25 323.5 194 Z"/>
                </g>

                <g id="legs">
                    <path stroke="#000000" strokeWidth="14" strokeLinejoin="round" strokeLinecap="round" fill="none"
                          d="
	M 169.75 238.45
	Q 151.55 275.35 146.5 311.65 146.35 312.55 146.2 313.45 141.55 347.75 148.45 381.4
	M 256.6 251.4
	Q 262 285.05 259.15 315.6 258.45 322.85 257.3 330 255.2 342.35 251.75 354.3 245.75 375.2 235.3 394.35"/>
                </g>

                <g id="hair">
                    <g id="Layer_1" transform="matrix( 1, 0, 0, 1, 81.8,55.4) ">
                        <g transform="matrix( 1, 0, 0, 1, -81.8,-55.4) ">
                            <path className="haircolor" fill={this.props.haircolor} stroke="none" d="
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
	Q 296.2 250.3 313.8 270.7 311.25 239.05 314.75 228.8 320.25 212.65 333.7 251.25 346.2 216.05 327.2 191.85 Z"/>

                            <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                                  fill="none" d="
	M 309.55 126.15
	Q 340.1 162.25 343.75 193.85 337.3 181.1 327.2 191.85 346.2 216.05 333.7 251.25 320.25 212.65 314.75 228.8 311.25 239.05 313.8 270.7 296.2 250.3 285.45 258.9
	M 203.15 82.6
	Q 196.85 62.95 164.45 62.9 215.3 44.2 230.5 72.2 259.6 52.5 284.5 78.8 257.7 74.15 279.15 91.85
	M 134.95 107.35
	Q 88 138.6 81.8 164.4 96.35 151.7 103.55 164.55 88.5 180.15 87.7 212.5 105.3 186.45 108.95 212.6 111.2 224.45 97.55 244.3 121.6326171875 223.440625 131.975 236.6 132.8634765625 237.7205078125 133.65 239.1"/>
                        </g>
                    </g>
                </g>

                <g id="mouth">
                    <g transform="matrix( 1.2175750732421875, 0.21356201171875, -0.21356201171875, 1.2175750732421875, -120.95,-113.95) ">
                        <path fill="#000000" stroke="none" d="
	M 368.8 190
	Q 347.3 200.45 325.8 202.75 324.15 202.9 322.5 203.05 313.65 203.75 304.8 203.05 298.6 202.55 292.45 201.35 275.65 198.15 258.85 190 275.65 217.3 292.45 220.5 298.6 221.7 304.8 222.2 313.65 222.9 322.5 222.2 324.15 222.05 325.8 221.9 347.3 219.6 368.8 190 Z"/>

                        <g transform="matrix( 0.796783447265625, -0.1397552490234375, 0.1397552490234375, 0.796783447265625, 112.25,73.85) ">
                            <path stroke="#000000" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"
                                  fill="none" d="
	M 153.64252548217775 172.6697906494141
	Q 172.3572563171387 186.18086929321288 192.1291191101074 193.6649513244629 199.36093139648438 196.43944778442386 206.80311584472656 198.3723197937012 217.4291618347168 201.11464614868163 228.35419464111328 202.15236740112306 230.39522781372074 202.32210845947264 232.43626098632814 202.4918495178223 259.1053176879883 204.28301010131838 287.51490478515626 196.15093383789065 255.0156051635742 227.59957275390627 228.3465484619141 225.80841217041018 226.30551528930664 225.63867111206054 224.26448211669924 225.46893005371095 213.33944931030277 224.43120880126952 202.71340332031252 221.68888244628909 195.27121887207034 219.75601043701175 188.03940658569337 216.98151397705078 168.2675437927246 209.49743194580077 153.64252548217775 172.6697906494141 Z"/>
                        </g>
                    </g>

                    <g transform="matrix( 1.2175750732421875, 0.21356201171875, -0.21356201171875, 1.2175750732421875, -120.95,-113.95) ">
                        <path fill="#660000" stroke="none" d="
	M 312.15 214
	Q 305.3 210.2 298.25 222.25 318.2 225.2 330.85 221.8 324.9 210.25 312.15 214 314.75 215.7 317.25 219.25 314.75 215.7 312.15 214 Z"/>

                        <g transform="matrix( 0.796783447265625, -0.1397552490234375, 0.1397552490234375, 0.796783447265625, 112.25,73.85) ">
                            <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                                  fill="none" d="
	M 213.41378860473634 213.27444763183593
	Q 229.73872833251954 211.43145675659179 234.51665878295898 226.76514282226566 218.38822326660159 228.20333862304688 194.72760848999025 220.35093002319337 205.88493499755862 207.1847625732422 213.41378860473634 213.27444763183593 Z
	M 213.41378860473634 213.27444763183593
	Q 216.21642837524416 215.89958648681642 218.50222091674806 220.75588302612306"/>
                        </g>
                    </g>
                </g>

                <g id="eyes">

                    <g id="left-eye">
                        <g id="left-eye-white"
                           transform="matrix( 0.999114990234375, 0.03857421875, -0.03857421875, 0.999114990234375, 63,48.8) ">
                            <path id="outer-left-eye-fill" fill="#FFFFFF" stroke="none" d="
			M 107.15 72.55
			Q 105.85 82.95 112.35 91.25 118.9 99.5 129.25 100.8 139.65 102.05 148 95.55 156.2 89.1 157.5 78.7 158.75 68.25 152.3 60 145.8 51.8 135.4 50.5 125.05 49.25 116.7 55.7 108.4 62.1 107.15 72.55 Z"/>

                            <g transform="matrix( 0.9993896484375, -0.03857421875, 0.03857421875, 0.9993896484375, -64.8,-46.3) ">
                                <path id="outer-left-eye-outline" stroke="#000000" strokeWidth="1"
                                      strokeLinejoin="round" strokeLinecap="round" fill="none" d="
			M 217.32481994628907 133.50578918457032
			Q 215.62479858398436 143.8464385986328 207.183251953125 149.97442169189452 198.58990936279298 156.14657440185545 188.24733123779296 154.4965087890625 177.95663757324218 152.7984161376953 171.73067169189454 144.3030563354492 165.55659027099608 135.7596694946289 167.2566116333008 125.4190200805664 168.90860595703126 115.02648620605468 177.44813537597656 108.95231628417969 186.03954925537107 102.83011932373046 196.3321716308594 104.47825622558594 206.67282104492188 106.17827758789062 212.85075988769532 114.6217529296875 218.97681427001953 123.11325531005859 217.32481994628907 133.50578918457032 Z"/>
                            </g>
                        </g>
                        <g id="left-pupil-wrap">
                            <g id="left-pupil"
                               transform="matrix( 1.72503662109375, 0.2782135009765625, -0.2782135009765625, 1.72503662109375, -20.2,-196.55) ">
                                <path id="inner-left-pupil" fill="#000000" stroke="none" d="
			M 154.85 177.35
			Q 156.8 175.35 156.8 172.55 156.8 169.75 154.85 167.8 152.85 165.8 150.05 165.8 147.25 165.8 145.25 167.8 143.3 169.75 143.3 172.55 143.3 175.35 145.25 177.35 147.25 179.35 150.05 179.35 152.85 179.35 154.85 177.35 Z"/>

                                <g transform="matrix( 0.5649871826171875, -0.0911102294921875, 0.0911102294921875, 0.5649871826171875, 29.3,109.2) ">
                                    <path id="inner-left-pupil-outline" stroke="#000000" strokeWidth="1"
                                          strokeLinejoin="round" strokeLinecap="round" fill="none" d="
			M 202.28000259399417 144.72894592285155
			Q 201.5010047912598 149.55904846191407 197.58075637817382 152.46660537719725 193.5742561340332 155.36025161743163 188.74415359497073 154.58125381469728 183.9140510559082 153.80225601196287 181.02040481567383 149.79575576782224 178.21301040649416 145.80316619873048 178.99200820922854 140.97306365966796 179.77100601196292 136.14296112060543 183.67734375 133.32165603637696 187.68384399414063 130.4280097961426 192.51394653320315 131.20700759887694 197.34404907226562 131.98600540161135 200.2376953125 135.99250564575198 203.05900039672855 139.89884338378903 202.28000259399417 144.72894592285155 Z"/>
                                </g>
                            </g>
                        </g>
                    </g>
                    <g id="right-eye">
                        <g id="right-eye-white"
                           transform="matrix( 0.999114990234375, 0.03857421875, -0.03857421875, 0.999114990234375, 63,48.8) ">
                            <path id="outer-right-eye-fill" fill="#FFFFFF" stroke="none" d="
			M 175.35 61.05
			Q 166.3 68.15 164.9 79.6 163.5 91.05 170.65 100.1 177.7 109.1 189.1 110.5 200.6 111.9 209.7 104.85 218.7 97.8 220.1 86.35 221.5 74.9 214.4 65.8 207.35 56.7 195.85 55.3 184.45 53.95 175.35 61.05 Z"/>

                            <g transform="matrix( 0.9993896484375, -0.03857421875, 0.03857421875, 0.9993896484375, -64.8,-46.3) ">
                                <path id="outer-right-eye-outline" stroke="#000000" strokeWidth="1"
                                      strokeLinejoin="round" strokeLinecap="round" fill="none" d="
			M 279.57432556152344 143.56376495361326
			Q 277.7338897705078 154.94962768554686 268.4699066162109 161.6462203979492 259.10601196289065 168.33895568847657 247.6701934814453 166.49659118652343 236.33428649902342 164.6580841064453 229.6376937866211 155.39410095214845 222.8431182861328 146.07630462646483 224.68355407714844 134.69044189453126 226.52398986816408 123.30457916259766 235.83985748291013 116.5599594116211 245.20568084716797 109.81726837158203 256.5435165405273 111.60581970214844 267.97933502197264 113.44818420410157 274.6720703125 122.81207885742187 281.4147613525391 132.1779022216797 279.57432556152344 143.56376495361326 Z"/>
                            </g>
                        </g>

                        <g id="right-pupil-wrap">
                            <g id="right-pupil"
                               transform="matrix( 1.89410400390625, 0.3055267333984375, -0.3055267333984375, 1.89410400390625, 18.75,-218.65) ">
                                <path id="inner-right-pupil" fill="#000000" stroke="none" d="
			M 154.85 177.35
			Q 156.8 175.35 156.8 172.55 156.8 169.75 154.85 167.8 152.85 165.8 150.05 165.8 147.25 165.8 145.25 167.8 143.3 169.75 143.3 172.55 143.3 175.35 145.25 177.35 147.25 179.35 150.05 179.35 152.85 179.35 154.85 177.35 Z"/>

                                <g transform="matrix( 0.514556884765625, -0.0829925537109375, 0.0829925537109375, 0.514556884765625, 8.5,114.05) ">
                                    <path id="inner-right-pupil-outline" stroke="#000000" strokeWidth="1"
                                          strokeLinejoin="round" strokeLinecap="round" fill="none" d="
			M 263.02686996459965 156.08423767089843
			Q 262.171395111084 161.38772888183595 257.8668388366699 164.58015975952148 253.46757736206052 167.7573143005371 248.16408615112306 166.9018394470215 242.86059494018554 166.04636459350584 239.6834403991699 161.64710311889647 236.60099105834962 157.26311798095705 237.45646591186525 151.95962677001953 238.31194076538088 146.656135559082 242.601220703125 143.5584098815918 247.00048217773437 140.3812553405762 252.3039733886719 141.2367301940918 257.60746459960933 142.09220504760745 260.78461914062495 146.49146652221683 263.88234481811526 150.7807464599609 263.02686996459965 156.08423767089843 Z"/>
                                </g>
                            </g>
                        </g>
                    </g>

                    <g id="eyelids">
                        <path className="haircolor" fill={this.props.haircolor} stroke="none" d="
	M 213.95 165.95
	Q 213.95 171.35 222.6 175.15 231.25 178.95 243.45 178.95 255.65 178.95 264.3 175.15 272.95 171.35 272.95 165.95 272.95 160.55 264.3 156.75 255.65 152.95 243.45 152.95 231.25 152.95 222.6 156.75 213.95 160.55 213.95 165.95
	M 204.6 161.6
	Q 214.15 158.75 214.15 154.7 214.15 150.65 204.6 147.75 195.05 144.9 181.55 144.9 168.05 144.9 158.5 147.75 148.95 150.65 148.95 154.7 148.95 158.75 158.5 161.6 168.05 164.5 181.55 164.5 195.05 164.5 204.6 161.6
	M 216.7 117.95
	Q 216.7 123.75 227 127.85 237.3 131.95 251.85 131.95 266.4 131.95 276.7 127.85 287 123.75 287 117.95 287 112.15 276.7 108.05 266.4 103.95 251.85 103.95 237.3 103.95 227 108.05 216.7 112.15 216.7 117.95
	M 208.9 98.45
	Q 198.8 93.75 184.55 93.75 170.3 93.75 160.2 98.45 150.1 103.2 150.1 109.85 150.1 116.5 160.2 121.2 170.3 125.95 184.55 125.95 198.8 125.95 208.9 121.2 219 116.5 219 109.85 219 103.2 208.9 98.45 Z"/>
                    </g>

                    <g id="eyeclosed">
                        <path className="haircolor" fill={this.props.haircolor} stroke="none" d="
	M 216.85 116.55
	Q 214.35 109.7 208.9 104.05 198.8 93.75 184.55 93.75 170.3 93.75 160.2 104.05 150.1 114.5 150.1 129.1 150.1 140.1 155.85 148.65 148.95 151.25 148.95 154.7 148.95 158.75 158.5 161.6 168.05 164.5 181.55 164.5 183.3 164.5 185 164.45 185.9 164.4 186.8 164.4
	L 187.4 164.35
	Q 197.2 163.85 204.6 161.6 214.15 158.75 214.15 154.7 214.15 152.65 211.65 150.9 215.4 146.1 217.25 140.5 218 146.65 218.45 153.15 219.2 155.6 220.3 157.9 213.95 161.3 213.95 165.95 213.95 171.35 222.6 175.15 231.25 178.95 243.45 178.95 248.1 178.95 252.25 178.4 266.55 178.25 276.7 167.5 283.65 160.15 278.9 153.8
	L 232.45 142.45 278.9 153.8
	Q 287 146.25 287 141.2 287 125.75 276.7 114.9 266.4 104 251.85 104 237.3 104 227 114.9 221.55 120.65 219 127.7 218.9 125 218.45 122.45 217.9 119.4 216.85 116.55
	M 161.4 131.05
	L 206.8 139.9 161.4 131.05 Z"/>

                        <path stroke="#000000" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
	M 278.9 153.8
	L 232.45 142.45
	M 161.4 131.05
	L 206.8 139.9"/>
                    </g>

                </g>


                <g id="shades">
                    <g transform="matrix( 0.606048583984375, 0.090057373046875, -0.090057373046875, 0.606048583984375, -85.95,-15) ">
                        <path className="sunglassframe" fill="#000000" stroke="none" d="
M 662.4 157.05
Q 663.6 153.9 666.9 153.55 668.3 145.3 664 137.05 598.5 125.2 563 137.05 532.05 143 501 137.05 453 123.05 397 137.05 393.55 145.8 394.95 154.05 398.25 154.4 399.45 157.55 399.9 168.7 404.4 185.2 408.95 201.7 421.4 213 433.9 224.25 451.65 225.3 469.45 226.35 494.7 209.7 519.95 193 519.4 169.55
L 520.45 160.55
Q 531.45 152.15 542.45 160.55
L 542.45 169.05
Q 541.9 192.5 567.15 209.2 592.4 225.85 610.2 224.8 627.95 223.75 640.45 212.5 652.9 201.2 657.45 184.7 661.95 168.2 662.4 157.05
M 483.45 209.8
Q 445.75 227.85 424.45 207.75 403.15 187.65 410.85 151.55 459.85 123.55 508.85 151.55 521.15 191.7 483.45 209.8
M 637.4 207.25
Q 616.1 227.35 578.4 209.3 540.7 191.2 553 151.05 602 123.05 651 151.05 658.7 187.15 637.4 207.25 Z"/>

                        <path fill="url(#Gradient_3)" stroke="none" d="
M 578.4 209.3
Q 616.1 227.35 637.4 207.25 658.7 187.15 651 151.05 602 123.05 553 151.05 540.7 191.2 578.4 209.3 Z"/>

                        <path fill="url(#Gradient_4)" stroke="none" d="
M 424.45 207.75
Q 445.75 227.85 483.45 209.8 521.15 191.7 508.85 151.55 459.85 123.55 410.85 151.55 403.15 187.65 424.45 207.75 Z"/>

                        <g transform="matrix( 1.6143798828125, -0.2398834228515625, 0.2398834228515625, 1.6143798828125, 142.35,3.55) ">
                            <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                                  fill="none" d="
M 142.30892486572264 103.81173553466797
Q 177.5084487915039 100.37026824951171 205.33797760009764 113.17770233154297 223.61994476318358 119.57997283935546 242.9129898071289 118.76125946044922 265.4948944091797 114.77662048339846 304.12389678955077 127.8570541381836 305.98693237304684 133.24420166015625 304.395491027832 138.1180221557617 302.3640106201172 138.03294982910157 301.35307159423826 139.83393402099608 300.0762100219727 146.55084991455078 295.8630447387696 156.14539337158203 291.6195770263672 165.73543395996091 283.05662384033207 171.4625686645508 274.46787109375003 177.15489807128907 263.61594848632814 176.19273071289064 252.73372344970704 175.2260604858398 238.93045196533205 162.86140289306638 225.13168334960938 150.46644287109376 227.57685546875 136.30413513183595
L 228.34234313964845 131.15272216796876
Q 222.43229064941409 125.0712829589844 215.0092742919922 129.1714599609375
L 213.5624069213867 134.53133697509764
Q 211.78388824462894 148.79270782470704 194.97720336914062 156.6397705078125 178.17502136230468 164.45653076171874 167.481916809082 162.21715850830077 156.8191146850586 159.98228912353517 150.25665283203125 152.038525390625 143.72899627685547 144.06896209716797 142.45742187499997 133.65939941406248 141.21614990234372 123.25433959960935 141.94756774902345 116.45637207031251 141.50399017333984 114.43925018310546 139.53554992675782 113.92994384765626 139.43005523681643 108.80396270751953 142.30892486572264 103.81173553466797 Z
M 208.7896270751953 122.6723571777344
Q 181.61485290527344 101.290185546875 149.39686584472656 113.84673461914065 141.47922058105468 135.03164672851562 152.57790222167966 149.1314453125 163.6765838623047 163.23124389648436 188.15015106201167 155.6872299194336 212.62822113037112 148.11291351318357 208.7896270751953 122.6723571777344 Z
M 235.5917007446289 126.34536590576172
Q 267.80968780517577 113.78881683349607 294.98446197509764 135.17098846435547 296.3999649047852 157.74278411865237 281.6809768676758 168.00613861083986 266.96198883056644 178.26949310302734 245.73949279785154 163.93515319824218 224.52149963378912 149.5705108642578 235.5917007446289 126.34536590576172 Z"/>
                        </g>
                    </g>
                </g>


                <g id="heartsunglasses">
                    <g>
                        <path fill="#A12E79" stroke="none" d="
		M 135.05 98.95
		Q 136.25 97.3 137.5 95.85 134.45 94.15 132.5 94.55 129.45 95.1 129.05 97.2 130.1 101.95 132.35 103.85 133.5 101.4 135.05 98.95
		M 235.4 114.75
		Q 236.55 113.05 237.9 111.65 229.35 102.85 218.45 108.7 219.2 110.4 219.75 112.25 220.25 113.8 220.6 115.3 228.3 110.9 233.6 117.5 234.4 116.1 235.4 114.75
		M 326.9 126.3
		Q 327.3 124.55 325.3 123.05 321.5 121.85 317.7 122.4 319.25 125.55 320.05 128.1 320.45 129.7 320.8 131.2 325.9 130.2 326.9 126.3 Z"/>

                        <path className="heartglassframe" fill="#CC00CC" stroke="none" d="
		M 237.9 111.65
		Q 236.55 113.05 235.4 114.75 234.4 116.1 233.6 117.5 225.3 131 230.35 146 236 162.65 249.7 173.45 256.35 180.95 267.3 187.7 279.8 184.65 288.35 179.55 304.05 173.6 314.4 159.45 323.75 146.65 320.8 131.2 320.45 129.7 320.05 128.1 319.25 125.55 317.7 122.4 313.55 113.85 302.75 109.75 289.95 107.5 278 114.35 270.4 104.4 257.55 102.65 245.35 103.25 237.9 111.65
		M 242.15 159.45
		Q 231.7 148.05 233.3 135.1 235.4 146.9 242.15 159.45
		M 308.65 115.6
		Q 300.1 111.75 290.75 112.8 300.5 109.05 308.65 115.6
		M 249.2 106.65
		Q 261.2 101.1 271 110.1 260.95 105.05 249.2 106.65
		M 316.9 151
		Q 313.3 160.1 304.7 165.95 318.9 150.85 317.85 133.25 320.55 141.85 316.9 151
		M 236.4 135.15
		Q 236.45 132.55 236.7 130.15 237.85 120.65 243 115.6 246.3 112.4 251.15 110.9 265.5 106.7 276.85 121.75 288.9 114.25 298.7 116.35 302.6 117.15 306.2 119.6 310.95 122.8 313.05 127.5 316.5 135.25 312.85 147.2 310.85 157.5 297.05 167 286.2 174.35 268.1 181.15 254.6 170.35 246.85 160.8 235.05 146.4 236.4 135.15
		M 202.4 93.95
		Q 189.65 91.7 179.35 98.8 170.05 88.6 157.2 86.85 144.95 87.4 137.5 95.85 136.25 97.3 135.05 98.95 133.5 101.4 132.35 103.85 126.25 116.65 130.85 130.55 136.3 147.2 149.4 157.65 156.05 165.15 166.95 171.9 179.5 168.85 188 163.75 204.45 157.65 214.85 143.6 224.4 130.8 220.6 115.3 220.25 113.8 219.75 112.25 219.2 110.4 218.45 108.7 213.9 98.3 202.4 93.95
		M 216.4 132.45
		Q 213.95 145.25 200.55 152.9 210.8 143.05 216.4 132.45
		M 210.1 100.5
		Q 199.3 95.3 188.3 97.05 200.3 91.5 210.1 100.5
		M 131.95 121.85
		Q 131.35 112 136.55 104.7 130.1 121.1 139 139.8 132.55 131.65 131.95 121.85
		M 168.6 93.55
		Q 160.1 89.7 150.75 90.75 160.5 87 168.6 93.55
		M 205.9 103.8
		Q 208.55 105.6 210.35 107.85 215.55 114.3 214.1 124.55 213.6 127.75 212.55 131.35 209.95 144.6 188.35 156.3 179.8 161 168.15 165.45 154.8 154.75 146.95 145.4 134.7 130.75 136.1 119.3 136.3 103.8 145.2 97.75 147.65 96.05 150.8 95.1 154.1 94.15 157.35 94.25 168.15 94.4 178.2 106.2 193.55 95.4 205.9 103.8 Z"/>

                        <path fill="url(#Gradient_1)" stroke="none" d="
		M 236.7 130.15
		Q 236.45 132.55 236.4 135.15 235.05 146.4 246.85 160.8 254.6 170.35 268.1 181.15 286.2 174.35 297.05 167 310.85 157.5 312.85 147.2 316.5 135.25 313.05 127.5 310.95 122.8 306.2 119.6 302.6 117.15 298.7 116.35 288.9 114.25 276.85 121.75 265.5 106.7 251.15 110.9 246.3 112.4 243 115.6 237.85 120.65 236.7 130.15 Z"/>

                        <path fill="#FFFFFF" stroke="none" d="
		M 304.7 165.95
		Q 313.3 160.1 316.9 151 320.55 141.85 317.85 133.25 318.9 150.85 304.7 165.95
		M 271 110.1
		Q 261.2 101.1 249.2 106.65 260.95 105.05 271 110.1
		M 290.75 112.8
		Q 300.1 111.75 308.65 115.6 300.5 109.05 290.75 112.8
		M 233.3 135.1
		Q 231.7 148.05 242.15 159.45 235.4 146.9 233.3 135.1
		M 150.75 90.75
		Q 160.1 89.7 168.6 93.55 160.5 87 150.75 90.75
		M 136.55 104.7
		Q 131.35 112 131.95 121.85 132.55 131.65 139 139.8 130.1 121.1 136.55 104.7
		M 188.3 97.05
		Q 199.3 95.3 210.1 100.5 200.3 91.5 188.3 97.05
		M 200.55 152.9
		Q 213.95 145.25 216.4 132.45 210.8 143.05 200.55 152.9 Z"/>

                        <path fill="url(#Gradient_2)" stroke="none" d="
		M 210.35 107.85
		Q 208.55 105.6 205.9 103.8 193.55 95.4 178.2 106.2 168.15 94.4 157.35 94.25 154.1 94.15 150.8 95.1 147.65 96.05 145.2 97.75 136.3 103.8 136.1 119.3 134.7 130.75 146.95 145.4 154.8 154.75 168.15 165.45 179.8 161 188.35 156.3 209.95 144.6 212.55 131.35 213.6 127.75 214.1 124.55 215.55 114.3 210.35 107.85 Z"/>

                        <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
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
		Q 136.25 97.3 135.05 98.95 133.5 101.4 132.35 103.85"/>
                    </g>
                </g>


            </g>


            <g id="shoefront">
                <g transform="matrix( 1.236175537109375, 0, 0, 1.236175537109375, -11.7,-41.8) ">
                    <path fill="#FFFFFF" stroke="none" d="
	M 159.05 332.15
	Q 158.9 336.2 151 339.05 142.95 342 131.55 342 120.15 342 112.1 339.05 104.05 336.15 104.05 332 104.05 330.85 104.65 329.8
	L 66.05 371
	Q 50.85 388.9 66.05 400 86.45 411.5 104.85 405.45 146.7 391.85 159.05 368 166.6 350.05 159.05 332.15 Z"/>

                    <g transform="matrix( 0.8089447021484375, 0, 0, 0.8089447021484375, 9.45,33.8) ">
                        <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
	M 184.91371917724612 368.79570465087886
	Q 184.7282928466797 373.8022155761719 174.96250610351564 377.32531585693357 165.01129302978515 380.97203369140624 150.9188919067383 380.97203369140624 136.8264907836914 380.97203369140624 126.87527770996094 377.32531585693357 116.92406463623045 373.74040679931636 116.92406463623045 368.6102783203125 116.92406463623045 367.18867645263674 117.66576995849609 365.89069213867185
	L 69.94939422607422 416.8211242675781
	Q 51.15952606201172 438.9486663818359 69.94939422607422 452.67021484375 95.16737518310546 466.8862335205078 117.91300506591797 459.4073715209961 169.6469512939453 442.5953842163086 184.91371917724612 413.11259765625 194.2468444824219 390.9232467651367 184.91371917724612 368.79570465087886 Z"/>
                    </g>
                </g>

                <g transform="matrix( -1.236175537109375, 0, 0, 1.236175537109375, 408.85,-41.8) ">
                    <path fill="#FFFFFF" stroke="none" d="
	M 159.05 332.15
	Q 158.9 336.2 151 339.05 142.95 342 131.55 342 120.15 342 112.1 339.05 104.05 336.15 104.05 332 104.05 330.85 104.65 329.8
	L 66.05 371
	Q 50.85 388.9 66.05 400 86.45 411.5 104.85 405.45 146.7 391.85 159.05 368 166.6 350.05 159.05 332.15 Z"/>

                    <g transform="matrix( -0.8089447021484375, 0, 0, 0.8089447021484375, 330.7,33.8) ">
                        <path stroke="#000000" strokeWidth="1" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
	M 212.2362808227539 368.79570465087886
	Q 212.42170715332034 373.8022155761719 222.1874938964844 377.32531585693357 232.13870697021488 380.97203369140624 246.23110809326172 380.97203369140624 260.3235092163086 380.97203369140624 270.2747222900391 377.32531585693357 280.22593536376957 373.74040679931636 280.22593536376957 368.6102783203125 280.22593536376957 367.18867645263674 279.4842300415039 365.89069213867185
	L 327.2006057739258 416.8211242675781
	Q 345.9904739379883 438.9486663818359 327.2006057739258 452.67021484375 301.98262481689454 466.8862335205078 279.2369949340821 459.4073715209961 227.50304870605473 442.5953842163086 212.2362808227539 413.11259765625 202.90315551757814 390.9232467651367 212.2362808227539 368.79570465087886 Z"/>
                    </g>
                </g>

                <g transform="matrix( 1.236175537109375, 0, 0, 1.236175537109375, -188.45,-45.5) ">
                    <g transform="matrix( 0.8089447021484375, 0, 0, 0.8089447021484375, 152.4,36.8) ">
                        <path stroke="#000000" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
	M 95.68494720458983 394.1458297729492
	Q 94.20153656005863 393.0332717895508 92.10003814697268 393.28050689697267 94.26334533691409 393.9604034423828 95.74675598144535 394.5784912109375 96.24122619628906 394.26944732666016 97.60101928710941 393.3423156738281 97.66282806396487 393.28050689697267 97.78644561767578 393.21869812011715
	L 97.84825439453124 393.21869812011715 98.09548950195312 393.0332717895508 98.40453338623047 392.72422790527344
	Q 98.71357727050781 392.47699279785155 99.08442993164061 392.2297576904297 100.3824142456055 382.46397094726564 99.20804748535159 376.90118103027345 97.78644561767578 369.6695541381836 92.03822937011722 366.33188018798825 86.6608657836914 363.2414413452148 82.45786895751957 365.0957046508789 78.56391601562501 366.88815917968753 74.73177185058597 373.50169830322267 69.35440826416016 382.83482360839844 80.78903198242188 388.7684661865234 84.00308837890628 390.43730316162106 90.61662750244142 392.72422790527344 91.35833282470702 393.0332717895508 92.10003814697268 393.28050689697267 87.6498062133789 393.65135955810547 80.47998809814453 399.58500213623046 71.4559066772461 406.94024658203125 68.18004150390624 412.5648452758789
	M 97.47740173339844 393.4659332275391
	L 97.35378417968752 393.5277420043945 97.23016662597655 393.65135955810547
	Q 97.35861299037936 393.52870776653293 97.47740173339844 393.4659332275391 Z
	M 97.47740173339844 393.4659332275391
	L 97.60101928710941 393.3423156738281
	M 100.32060546874999 412.5648452758789
	Q 99.20804748535159 417.6949737548828 96.92112274169921 426.28639373779293
	M 101.24773712158202 395.93828430175785
	Q 102.36029510498048 403.2935287475586 100.32060546874999 412.5648452758789
	M 99.39347381591796 392.7860366821289
	L 101.24773712158202 395.93828430175785
	M 99.39347381591796 392.7860366821289
	Q 99.14623870849613 392.8478454589844 98.9608123779297 392.9096542358398 98.83719482421878 392.9714630126953 98.71357727050781 393.0332717895508 97.47740173339844 395.1965789794922 95.74675598144535 394.5784912109375
	M 98.71357727050781 393.0332717895508
	Q 97.97187194824221 393.28050689697267 97.23016662597655 393.65135955810547
	M 98.71357727050781 393.0332717895508
	Q 98.89900360107424 392.662419128418 99.08442993164061 392.2297576904297 109.53011322021484 384.2564254760742 117.00897521972655 383.39110260009767 122.81900024414062 382.71120605468747 129.6179656982422 386.66696777343753 133.14106597900388 388.6448486328125 133.63553619384766 390.43730316162106 134.1918151855469 392.60061035156247 131.59584655761716 397.1126510620117 130.3596710205078 399.21414947509766 125.35316009521483 397.7925476074219 118.49238586425781 395.38200531005856 114.5366241455078 393.9604034423828 105.327116394043 390.93177337646483 99.39347381591796 392.7860366821289
	L 99.08442993164061 392.2297576904297
	Q 99.02262115478516 392.53880157470707 98.9608123779297 392.9096542358398"/>
                    </g>
                </g>

                <g transform="matrix( -1.236175537109375, 0, 0, 1.236175537109375, 583.6,-45.5) ">
                    <g transform="matrix( -0.8089447021484375, 0, 0, 0.8089447021484375, 472.1,36.8) ">
                        <path stroke="#000000" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                              fill="none" d="
	M 299.4650527954102 394.1458297729492
	Q 300.9484634399414 393.0332717895508 303.04996185302736 393.28050689697267 300.88665466308595 393.9604034423828 299.4032440185547 394.5784912109375 298.908773803711 394.26944732666016 297.5489807128906 393.3423156738281 297.48717193603517 393.28050689697267 297.36355438232425 393.21869812011715
	L 297.3017456054688 393.21869812011715 297.0545104980469 393.0332717895508 296.74546661376957 392.72422790527344
	Q 296.4364227294922 392.47699279785155 296.0655700683594 392.2297576904297 294.76758575439453 382.46397094726564 295.94195251464845 376.90118103027345 297.36355438232425 369.6695541381836 303.1117706298828 366.33188018798825 308.4891342163086 363.2414413452148 312.69213104248047 365.0957046508789 316.586083984375 366.88815917968753 320.41822814941406 373.50169830322267 325.7955917358399 382.83482360839844 314.36096801757816 388.7684661865234 311.14691162109375 390.43730316162106 304.5333724975586 392.72422790527344 303.791667175293 393.0332717895508 303.04996185302736 393.28050689697267 307.50019378662114 393.65135955810547 314.6700119018555 399.58500213623046 323.69409332275393 406.94024658203125 326.9699584960938 412.5648452758789
	M 297.6725982666016 393.4659332275391
	L 297.7962158203125 393.5277420043945 297.9198333740235 393.65135955810547
	Q 297.7913870096207 393.52870776653293 297.6725982666016 393.4659332275391 Z
	M 297.6725982666016 393.4659332275391
	L 297.5489807128906 393.3423156738281
	M 294.82939453125005 412.5648452758789
	Q 295.94195251464845 417.6949737548828 298.2288772583008 426.28639373779293
	M 293.902262878418 395.93828430175785
	Q 292.78970489501955 403.2935287475586 294.82939453125005 412.5648452758789
	M 295.7565261840821 392.7860366821289
	L 293.902262878418 395.93828430175785
	M 295.7565261840821 392.7860366821289
	Q 296.0037612915039 392.8478454589844 296.18918762207034 392.9096542358398 296.31280517578125 392.9714630126953 296.4364227294922 393.0332717895508 297.6725982666016 395.1965789794922 299.4032440185547 394.5784912109375
	M 296.4364227294922 393.0332717895508
	Q 297.1781280517578 393.28050689697267 297.9198333740235 393.65135955810547
	M 296.4364227294922 393.0332717895508
	Q 296.2509963989258 392.662419128418 296.0655700683594 392.2297576904297 285.6198867797852 384.2564254760742 278.1410247802735 383.39110260009767 272.3309997558594 382.71120605468747 265.53203430175785 386.66696777343753 262.00893402099615 388.6448486328125 261.5144638061524 390.43730316162106 260.95818481445315 392.60061035156247 263.55415344238287 397.1126510620117 264.79032897949224 399.21414947509766 269.7968399047852 397.7925476074219 276.6576141357422 395.38200531005856 280.61337585449223 393.9604034423828 289.82288360595703 390.93177337646483 295.7565261840821 392.7860366821289
	L 296.0655700683594 392.2297576904297
	Q 296.1273788452149 392.53880157470707 296.18918762207034 392.9096542358398"/>
                    </g>
                </g>
            </g>
        </svg>
    );
  }
}
