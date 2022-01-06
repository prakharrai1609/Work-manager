exports.getDate = () => {
  let today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let currDay = today.toLocaleDateString("en-US", options);
  return currDay;
};

exports.getDay = () => {
  let today = new Date();

  let options = {
    weekday: "long",
  };

  let currDay = today.toLocaleDateString("en-US", options);
  return currDay;
};
