fn main(){
  struct ColorClassicStruct {
      name: String,
      hex: String,
  }
  let green = ColorClassicStruct {
    name: String::from("green"),
    hex: String::from("#00FF00")
  };
}
