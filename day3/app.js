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

// Creating variables for menu section
const dishBlockList = document.getElementById('dishBlockList');
const courseSelect = document.getElementById('courseSelect');
const courseTitle = document.getElementById('courseTitle');

// Original Menu listed at site refresh
createList(dishes);

// Adding listener event for drop down menu selection
courseSelect.addEventListener('change', function () {
  const selectedCourse = courseSelect.value;
  // console.log(selectedCourse); // check is event works

  // if user selects view all, there is no filtered list
  if (selectedCourse === '') {
    createList(dishes);
  } else {
    // else if they choose an option, filter the menu
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
