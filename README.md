Sustainability Footprint Explorer
=================================

An interactive visualisation of the footprint of food on your plate.

This is inspired by an [infographic](infographic.pdf) I created about a
large household, to compare what a move to a more vegan basic diet would
contribute to the world.  To keep things managable, I looked only at the
greenhouse gases, and took readily available data (without reading all relevant
papers). A rough guess, but still better than nothing at all.



Technologies
------------

[React](facebook.github.io/react) with [RxJS](https://github.com/Reactive-Extensions/RxJS)
and [rx-recompose](https://github.com/acdlite/recompose) (though it could use a lot of improvement
there), with [Bootstrap](https://react-bootstrap.github.io/).

For building, [Webpack](https://webpack.github.io/) is used with [Babel](https://babeljs.io/).


Develop
-------

```sh
npm install
npm start
```


Release
-------

```sh
npm run build
```

Standalone files in `build/`.


Licensed under the [MIT license](https://opensource.org/licenses/MIT).
Some artwork from [openclipart.org](http://openclipart.org/).
Data from their respective [sources](src/footprint-data.js).
