import React from "react";

const CountryDetails = ({
  l1,
  l2,
  l3,
  l4,
  l5,
  l1Value,
  l2Value,
  l3Value,
  l4Value,
  l5Value,
}) => {
  return (
    <ul className="Single--country--details">
      <li>
        {l1}
        <span>{l1Value}</span>
      </li>
      <li>
        {l2}
        <span>{l2Value}</span>
      </li>
      <li>
        {l3}
        <span>{l3Value}</span>
      </li>
      <li>
        {l4}
        <span>{l4Value}</span>
      </li>
      <li>
        {l5}
        <span>{l5Value}</span>
      </li>
    </ul>
  );
};

export default CountryDetails;
