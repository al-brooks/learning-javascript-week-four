// Function to create Menu
function createList(dishList) {
  const dishBlocks = dishList.map((dish) => {
    const dishBlock = `
      <article class="dishBlocks">
          <img src="${dish.imageURL}" class="dishImages"/>
          <summary class="dishSummary">
              <span class="dishTitles">${dish.title}</span>
              <span class="dishDetails">${dish.description}</span>
          </summary>
          <span class="dishPrices">${dish.price}</span>
      </article>
            `;

    return dishBlock;
  });
  dishBlockList.innerHTML = dishBlocks.join('');
}

// variables for menu section
const dishBlockList = document.getElementById('dishBlockList');
const courseSelect = document.getElementById('courseSelect');
const courseTitle = document.getElementById('courseTitle');

// display full menu when page loads
createList(dishes);

// dropdown menu event listener
courseSelect.addEventListener('change', function () {
  const selectedCourse = courseSelect.value;
  // console.log(selectedCourse); // check if listener works

  // if user selects no course, we need to display full menu again
  if (selectedCourse === '') {
    createList(dishes);
  } else {
    // Otherwise, we filter the menu
    const filteredDishList = dishes.filter(
      (dish) => dish.course === selectedCourse
    );
    createList(filteredDishList);
  }

  if (selectedCourse === '') {
    courseTitle.innerHTML = `Here's our full menu!`;
  } else {
    courseTitle.innerHTML = selectedCourse;
  }
});
