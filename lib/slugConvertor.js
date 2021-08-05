const slugConvertor = (slug) => {
  if (slug) {
    if (slug === "social-relationship") {
      return "Social & Relationships";
    } else {
      return slug
        .split("-")
        .map(
          (word) =>
            word.substr(0, 1).toUpperCase() + word.substr(1, word.length)
        )
        .join(" ");
    }
  }
};

export default slugConvertor;
