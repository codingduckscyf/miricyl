const titleConvertor = (name) => {
  if (name) {
    if (name === "social-relationship") {
      return "Social & Relationships";
    } else {
      return name
        .split("-")
        .map(
          (word) =>
            word.substr(0, 1).toUpperCase() + word.substr(1, word.length)
        )
        .join(" ");
    }
  }
};

export default titleConvertor;
