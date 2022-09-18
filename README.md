### Getting started

1. Fork and clone this repository.

1. Navigate to the cloned repository's directory on your command line. Then, run the following command:

```
npm install
```

This will install the libraries needed to run the tests.

1. Open up the repository in VSCode. Follow the instructions below to complete the Lab.

### Tests

To run the tests, you can run the following command from the command line. You will need to be in the root directory of your local directory.

```
npm test
```

This will open the Cypress testing window, where you can click to run an individual suite of tests or all of the tests at once.

## Submitting

To submit the assessment, you should do the following:

- [ ] Create a pull request against the original repository.
- In your pull request description, add screenshots of the following:
  - [ ] Your landing page, when a user first arrives.
  - [ ] Your landing page, after choosing a dropdown menu.
  - [ ] Your landing page, after submitting two reviews.
- [ ] Submit a link to your pull request on Canvas.

## Assessment Details

You will create an application using HTML, CSS, and JavaScript that accesses the Pokemon API and allows users to view and write a log post for each pokemon.

### The API

The API can be accessed via the link below.

- [Pokemon API](https://pokeapi.co/docs/v2)

You will only need to make one API call in your application to receive all pokemon names. Look under "resource-listspagination-section" and "pokemon" to find the URL you will need to access. Note: You will also need to retrive individual pokemon

### Initial Layout and Style

While it does not need to look exactly the same, it should include the following:

- [ ] `body`

  - [ ] All non-input text should have a font-size of `16px`.

- `header`

  - [ ] `h1`: `Pokedex App`
  - [ ] `ul`, `id` = `pokemon-list`

- [ ] `main`

  - [ ] `section`, `id` = `curr-pokemon`

  - [ ] `section`, `id` = `pokemon-log`
  - [ ] `h2`: `Pokemon Log Form`
    - [ ] `form`
      - [ ] `label`, `for` = `pallet`: `Pallet`
      - [ ] `input`, `id` = `pallet`, `name` = `site`, `checked`: type radio, 
      - [ ] `label`, `for` = `viridian`: `Viridian`
      - [ ] `input`, `id` = `viridian`, `name` = `site`: type radio
      - [ ] `input`: type submit

  - [ ] `section`, `id` = `pokemon-sightings`
    - [ ] `h2`: `Pokemon Log`
    - [ ] `ul`, `id` = `sightings-list`: starts empty, will be populated with `p` and `button` elements, when a pokemon is clicked


The pokemon names should be populated into `p` elements from a call to the API inside the `div` with the id of `pokemon-list`.

`p` elements should have the text of the pokemon name.

### Single Pokemon Display

This content should change each time the user clicks a pokemon name.

When a pokemon name is clicked , the user should see:

An `h3` with the pokemon's name appear in the curr-pokemon section of the page.
A `p` with the pokemon's base experience.
A `p` with the pokemon's weight.
A `p` with the pokemon's height.
A `img` with the src= `front_default sprite` for the pokemon and alt = the pokemon's name

### Add Log Posts

- When the user chooses the radio button and presses the "Submit to Log" button, they should see:

  - [ ] The review, inside of an `unordered `list of `li` elements, with the name of the pokemon in a `strong` element and the sighting site of the pokemon afterwards, and a `button` to delete the pokemon.

- [ ] If the user clicks a different pokemon posting to the log, all of the posts should stay where they are.

- [ ] If the user tries to make a log post when no pokemon was clicked, an alert should pop up.
