//you cannot create an instance from abstract class
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia():void
  getReelTime():number{
    //some complex calculations
    return 4
  }
}
//const fx=new TakePhoto("Test","test")
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }
  getSepia(): void {
      console.log("Sepia")
  }
}
const fx =new Instagram("Test","test",4)
