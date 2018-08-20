# Recipes-book 🍰

This small app presents a simple cookbook containing your favourite recipes. You can read, add, delete and modify them. The list consists of single recipes, which you can expand/collapse as you wish.

# Tech stack
App is based on well known React starter - **create react app**, with additional tools:
 - **React**
 - **Redux** to keep application state in one place
 - **Redux-form** to keep form state in shared place with redux store, to easily validate form fields
 - **CSS Modules** to have small, separate files with style (**SASS**) which can be imported locally in place of usage
 - **classnames** to apply multiple classnames to React components (or with additional conditions)
 - **React-helmet** to apply *body* style when modal view is on (more precisely: to hide scrollbar)
 - **uuid** to give unique id when new recipe is created
