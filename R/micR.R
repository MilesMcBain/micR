#' <Add Title>
#'
#' https://p5js.org/examples/sound-frequency-spectrum.html
#'
#' @import htmlwidgets
#'
#' @export
micR <- function(message, width = 200, height = 0, elementId = NULL) {

  # forward options using x
  x = list()

  # create widget
  htmlwidgets::createWidget(
    name = 'micR',
    x,
    width = width,
    height = height,
    package = 'micR',
    elementId = elementId
  )
}

#' <Add Title>
#'
#' https://p5js.org/examples/sound-frequency-spectrum.html
#'
#' @import htmlwidgets
#'
#' @export
mouseR <- function(message, width = 200, height = 0, elementId = NULL) {

  # forward options using x
  x = list()

  # create widget
  htmlwidgets::createWidget(
    name = 'mouseR',
    x,
    width = width,
    height = height,
    package = 'micR',
    elementId = elementId
  )
}

#' Shiny bindings for micR
#'
#' Output and render functions for using micR within Shiny
#' applications and interactive Rmd documents.
#'
#' @param outputId output variable to read from
#' @param width,height Must be a valid CSS unit (like \code{'100\%'},
#'   \code{'400px'}, \code{'auto'}) or a number, which will be coerced to a
#'   string and have \code{'px'} appended.
#' @param expr An expression that generates a micR
#' @param env The environment in which to evaluate \code{expr}.
#' @param quoted Is \code{expr} a quoted expression (with \code{quote()})? This
#'   is useful if you want to save an expression in a variable.
#'
#' @name micR-shiny
#'
#' @export
micROutput <- function(outputId, width = '200px', height = '10px'){
  htmlwidgets::shinyWidgetOutput(outputId, 'micR', width, height, inline = TRUE, package = 'micR')
}

#' @rdname micR-shiny
#' @export
renderMicR <- function(expr, env = parent.frame(), quoted = FALSE) {
  if (!quoted) { expr <- substitute(expr) } # force quoted
  htmlwidgets::shinyRenderWidget(expr, micROutput, env, quoted = TRUE)
}


