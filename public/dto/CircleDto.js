//
// dto class for CircleDto
//
module.exports = class CircleDto {
  constructor(json) {
    try {
      if (typeof json === "string") json = JSON.parse(json);
      this.id = json.id;
      this.circleName = json.circleName;
      this.problemDescription = json.problemDescription;
      this.durationInSeconds = json.durationInSeconds;
      this.circleContext = json.circleContext;
      this.members = json.members;
      this.onShelf = json.onShelf;
      this.publicKey = json.publicKey;

      this.startTime = json.startTime;
      this.endTime = json.endTime;
      this.lastResumeTime = json.lastResumeTime;
    } catch (e) {
      throw new Error("Unable to create dto 'CircleDto' : " + e.message);
    }
  }

  isValid() {
    if (this.id) return true;
    return false;
  }
};