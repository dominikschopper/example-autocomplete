# xmpl autocomplete - an example implementation of an autocomplete tool

## requirements

- the autocomplete must provide an input field to enter a search term
- the autocomplete must connect to a source (a simple array)
- the autocomplete must show all words from the source, that match the string entered into the input field
- the autocomplete should have a minLength attribute, the search/autocomplete is triggered when the length of the string in
  the search field is equal or greater than the given minLength
- an enter or mousclick on the selected value of the resultlist should
  put the selected value into the input field
- the source must be configurable
- on selecting a value one (or more) functions should be triggered (event onSelect)
- the onSelect functions should be configurable
- css must be customisable
- _opt._ an enter on the input field should not trigger a submit on the wrapping form
- _opt._ if the given source is an object, the onSelect should gather the selected word as well as the key field of the object

## project structure

### docs

- project documentation
- api documentation with jsdoc ...

### ressources

- static html templates
- assets in raw/pure form to be used in project
- info documents provided by management

### project

the actual source code
