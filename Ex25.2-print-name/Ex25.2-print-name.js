const obj = {
  name: "Liat",
  printName: function () {
    console.log("my name is", this.name);
  },
  printNameAfterSecond: function () {
    setTimeout(this.printName.bind(this), 1000); //if i won't bind it, it will refer to the window // can also write bind(obj)
    this.printName();
  },
};

obj.printName();
obj.printNameAfterSecond();
