// Write a code onclick create a random randius circle if any two circle intersect the alert box
// ui does't shows more than 2 circle if third appear prev two removed

// check the position of the cursor onclick and draw the circle in container
document.addEventListener("click", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  // check circle not more than 2 if more then two the remove all
  if (document.querySelectorAll(".circle").length >= 2) {
    document.querySelectorAll(".circle").forEach((circle) => {
      circle.remove();
    });
  }
  let circle = document.createElement("div");
  circle.classList.add("circle");
  let radius = Math.floor(Math.random() * 100) + 1;
  // add circle on where the mouse coursor is present align the circle center with mouse cursor
  circle.style.top = y - radius + "px";
  circle.style.left = x - radius + "px";
  circle.style.width = radius * 2 + "px";
  circle.style.height = radius * 2 + "px";
  document.body.appendChild(circle);
  // check the position of the circle if any two circle intersect the alert box
  document.querySelectorAll(".circle").forEach((circle) => {
    let circle2 = circle;
    let circle1 = circle2.nextElementSibling;
    if (circle1 && circle2) {
      let circle1x = parseInt(circle1.style.left.slice(0, -2));
      let circle1y = parseInt(circle1.style.top.slice(0, -2));
      let circle2x = parseInt(circle2.style.left.slice(0, -2));
      let circle2y = parseInt(circle2.style.top.slice(0, -2));
      let distance = Math.sqrt(
        (circle1x - circle2x) ** 2 + (circle1y - circle2y) ** 2
      );
      if (distance < circle1.offsetWidth / 2 + circle2.offsetWidth / 2) {
        console.log("Circle intersect");
      }
      console.log(distance);
    }
  });
});

// function search(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);

//     if (nums[mid] === target) {
//       return mid; // Found the target
//     }

//     // Check if the left half is sorted
//     if (nums[left] <= nums[mid]) {
//       // Target is in the left sorted half
//       if (nums[left] <= target && target < nums[mid]) {
//         right = mid - 1;
//       } else {
//         left = mid + 1;
//       }
//     }
//     // Otherwise, the right half is sorted
//     else {
//       // Target is in the right sorted half
//       if (nums[mid] < target && target <= nums[right]) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
//   }

//   return -1; // Target not found
// }

// console.log(search([4, 5, 6, 7, 0, 1, 2], 0));
