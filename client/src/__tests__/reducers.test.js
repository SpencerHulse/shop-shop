import {
  UPDATE_PRODUCTS,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "../utils/actions";
import { reducer } from "../utils/reducers";

// Sample of what state might look like initially
const initialState = {
  products: [],
  categories: [{ name: "Food" }],
  currentCategory: "1",
};

// Test to update the products list
test("UPDATE_PRODUCTS", () => {
  // Function that creates a new state object with current state
  // and the action taken to update state
  let newState = reducer(initialState, {
    // The type of action being taken - one of the predefined actions
    type: UPDATE_PRODUCTS,
    // New data we want to use with the action (value in this instance)
    products: [{}, {}],
  });

  // The goal is to pass the initial state and action, indicating an update to the product list
  // The update is what is in the new products list
  // It should be done without impacting the initial state

  expect(newState.products.length).toBe(2);
  expect(initialState.products.length).toBe(0);
});

test("UPDATE_CATEGORIES", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CATEGORIES,
    categories: [{}, {}],
  });

  expect(newState.categories.length).toBe(2);
  expect(initialState.categories.length).toBe(1);
});

test("UPDATE_CURRENT_CATEGORY", () => {
  let newState = reducer(initialState, {
    type: UPDATE_CURRENT_CATEGORY,
    currentCategory: "2",
  });

  expect(newState.currentCategory).toBe("2");
  expect(initialState.currentCategory).toBe("1");
});
