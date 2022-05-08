const obj = {
  name: "Liat",
  printName: function () {
    console.log("my name is", this.name);
  },
  printNameAfterSecond: function () {
    setTimeout(this.printName.bind(obj), 1000);
  },
};

obj.printName();
obj.printNameAfterSecond();
