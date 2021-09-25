import React from "react";

function Nav(props) {
  const {
    contactSelected,
    setContactSelected
  } = props;


  const handleClick = (item) => {
    console.log(item);
    return item;
  };

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"></span> Chase McQuown
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            {/* NOTE: when About is selected, contactSelected is set to false, and the About component is rendered */}
            <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
              About me
            </a>
          </li>
          {/* NOTE: when the user selected Contact, we want to add the CSS class navActive, which will illuminate the background */}
          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <span onClick={() => handleClick('Contact')} onClick={() => setContactSelected(true)}>
              Contact
            </span>
          </li>
          <li className="mx-2">
            {/* NOTE: when About is selected, contactSelected is set to false, and the About component is rendered */}
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected(false)}>
             Portfolio
            </a>
          </li>
          <li className="mx-2">
            {/* NOTE: when About is selected, contactSelected is set to false, and the About component is rendered */}
            <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
          {/* {categories.map((category) => (
            <li
            className={`mx-1 ${
              currentCategory.name === category.name && !contactSelected && `navActive`
            }`}
            key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category);
                  setContactSelected(false)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))} */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;