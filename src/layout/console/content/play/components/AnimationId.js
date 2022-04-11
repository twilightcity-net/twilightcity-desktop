/**
 * Creates consistent animationIds for use across various dependencies that use animations
 */

export default class AnimationId {
  /**
   * static enum subclass to store animation types
   * @returns {{MoovieFervie:string, FervieGlow:string, LadyFervie:string, FervieWalkUp: string, ShroomHouse: string, FervieWalkDown: string, FervieWalkRight: string, FervieWalkLeft: string}}
   * @constructor
   */
  static get Animation() {
    return {
      FervieWalkUp: "FervieWalkUp",
      FervieWalkDown: "FervieWalkDown",
      FervieWalkRight: "FervieWalkRight",
      FervieGlow: "FervieGlow",
      ShroomHouse: "ShroomHouse",
      LadyFervie: "LadyFervie",
      MoovieFervie: "MoovieFervie"
    };
  }

  static getFrameOnTwos(animationFrame) {
    return (
      Math.floor((parseInt(animationFrame, 10) - 1) / 2) + 1
    );
  }

  static getIdOn12(animationName, animationFrame) {
    return animationName + "_" + animationFrame;
  }

  static getIdOn24(animationName, animationFrame) {
    let frameOnTwos = this.getFrameOnTwos(animationFrame);
    return animationName + "_" + frameOnTwos;
  }
}
