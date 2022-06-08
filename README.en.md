# Welcome to the Pixels Art project repository!

### README Translations:

-   [English](/README.en.md)
-   [Portuguese](/README.md)

* * *

## 👨‍💻 What was developed:

-   In this project, I implemented a pixel art editor where the user can choose a color from a color palette and can paint whatever they want on a whiteboard 🎨 🧑‍🎨
-   Basic project structure
    -   I implemented a color palette using`javascript`,`css`e`html`;
    -   the files`index.html`,`style.css`e`script.js`contains HTML, CSS and JavaScript code, respectively;

:bulb:**See a sample below**

![project sample](./sample.gif)

# Mandatory Requirements

## 1 - Add the title "Color Palette" to the page.

<details>
  <summary>Sua página deve conter o título "Paleta de Cores"</summary><br />

-   The title must be inside a tag`h1`as`id`denominated`title`;

-   The title text must be**exactly**"Color palette".

**what will be checked**

-   Checks if it contains an element`h1`;
-   Check if you have an id`title`;
-   Check if the title exists`Paleta de Cores`.

</details>

## 2 - Add to the page a palette containing four different colors.

<details>
  <summary>Sua página deve conter uma paleta com quatro cores</summary>

-   The color palette must be an element with`id`denominated`color-palette`, and each individual color contained in the color palette must have the`classe`call`color`;

-   The background color of each element in the palette should be the color that the element represents.**The only color not allowed in the palette is white**;

-   Each color palette element must have a solid, 1-pixel wide black border;

-   The color palette should list all the colors available for use side by side, and should be positioned below the title`Paleta de Cores`;

-   The color palette must not contain repeating colors.

**what will be checked**

-   The color palette must be an element with`id`denominated`color-palette`;

-   Each individual color in the color palette has the`classe`call`color`;

-   The background color of each element in the palette is the color the element represents :warning:**The only color not allowed in the palette is white**:warning:;

-   Checks that each color palette element has a solid, 1-pixel wide black border;

-   The palette lists all the colors available for use, side by side;

-   The color palette is positioned below the title`Paleta de Cores`;

-   The color palette does not contain repeating colors.

</details>

## 3 - Add color**black**as the first color in the color palette.

<details>
  <summary>A primeira cor na paleta criada no requisito 2 deve ser preta </summary><br />

**what will be checked**

-   Checks if the first color in the palette has`background-color `for that;

-   The other colors can be chosen freely.

</details>

## 4 - Add a frame containing 25 pixels to the page.

<details>
  <summary>Sua página deve conter um quadro de pixels 5x5</summary>

-   The "pixel" frame must be 5 elements wide and 5 elements long;

-   The "pixel" frame must have the`id`denominated`pixel-board`, whereas each individual "pixel" within the frame must have the`classe`called`pixel`;

-   When opening the page, the initial color of the "pixels" that make up the pixel frame must be white;

-   The "pixel" frame should appear below the color palette.

**what will be checked**

-   The "pixel" frame has the`id`denominated`pixel-board`;

-   Each individual pixel within the frame has the`classe`called`pixel`;

-   The initial color of the "pixels" inside the frame, when opening the page, is white;

-   The "pixel" frame appears below the color palette.

</details>

## 5 - Make each pixel of the frame have a width and height of 40 pixels and a black border of 1 pixel thick.

<details>
  <summary>Cada <code>pixel</code> do quadro deve possuir 40px de largura e 40px de altura e uma borda preta solida de 1px de espessura</summary><br />

**what will be checked**

-   The "pixel" frame has a height and length of 5 elements;

-   Checks that 40 pixels high and 40 pixels wide is the total size of the element, including its content and excluding the black border, which must be created separately.

</details>

## 6 - Set the black color as the initial color of the color palette

<details>
  <summary>Ao carregar a página, a cor preta já deve estar selecionada na paleta para pintar os pixels do quadro.</summary>

-   The black element must initially have the class`selected`;

-   The element that should receive the class`selected`must be one of the elements that have the class`color`, as specified not**requirement 2**.

**what will be checked**

-   The black element initially has the class`selected`;

-   No other color in the palette has the class`selected`when loading the page.

</details>

## 7 - Select a color from the color palette and fill the pixels in the frame.

<details>
  <summary>Ao clicar em outras cores da paleta de cores, a cor deve ser selecionada e poderá ser utilizada para preencher os quadros</summary>

-   A`classe``selected`must be added to the color selected in the palette, at the same time it is removed from the previously selected color;

-   Only one of the colors in the palette must have the class`selected`every time;

-   The elements that should receive the`classe``selected`must be the same elements that have the class`color`, as specified not**requirement 2**.

**what will be checked**

-   Checks if only one color in the color palette has the class`selected`every time;

-   Checks that pixels inside the frame do not have the class`selected`when they are clicked.

</details>

## 8 - Fill a pixel of the frame with the color selected in the color palette.

<details>
  <summary>Ao clicar em algum <code>pixel</code>  do quadro a sua cor deve ser alterada para a cor selecionada na paleta de cores</summary><br />

**what will be checked**

-   When loading the page, it should be possible to paint the pixels of the frame black;

-   After selecting another color from the color palette, you can paint the pixels in the frame with that color;

-   Only the pixel that was clicked was filled with the selected color, without influencing the color of the other pixels.

</details>

## 9 - Create a button that returns the frame color to the initial color.

<details>
  <summary>Sua página deve ter um botão que, ao ser clicado, deixe todos os <code>pixels</code> do quadro com a cor branca</summary><br />

**what will be checked**

-   The button has the`id`denominated`clear-board`;

-   The button is positioned between the color palette and the pixel frame;

-   The button text is`Limpar`;

-   When clicking the button, the pixel frame is completely filled with white.

</details>

# Bonus Requirements

## 10 - Make the pixel frame have its size defined by the user.

<details>
  <summary>Sua página deve conter um input para que a pessoa usuária possa definir o tamanho do quadro de pixels</summary>

-   Create an input and a button that allow defining a frame of pixels with a size between 5 and 50. When clicking on the button, a frame of**N**pixels wide and**N**pixels high, in which**N**is the number entered in the input. That is, if the value passed to the input is equal to 7, clicking the button will generate a frame of 49 pixels (7 pixels wide x 7 pixels high);


-   The input must have the`id`denominated`board-size`and the button must have the`id`denominated`generate-board`;

-   The input must only accept numbers greater than zero. This restriction**he must**be done using the element attributes`input`;

-   The button must contain the text "VQV";

-   The input must be positioned between the color palette and the pixel frame;

-   The button must be positioned next to the input;

-   If no value is placed in the input when clicking the button, show a`alert`with the text: "Invalid board!";

-   The new frame must have all pixels filled with white color.

**what will be checked**

-   There is an input with the id`board-size`;

-   There is a button with the id`generate-board`;

-   The input only accepts numbers greater than zero. This constraint must be done using the element attributes`input`;

-   The button contains the text`VQV`;

-   The input is positioned between the color palette and the pixel frame;

-   The button is positioned to the right of the input;

-   If no value is placed in the input when clicking on the button, a`alert`is displayed with the text:`Board inválido!`;

-   When clicking on the button with a value filled in, the size of the board changes;

-   The new frame has all pixels filled with white color.

</details>

## 11 - Limit the minimum and maximum pixel frame size.

<details>
  <summary>A pessoa usuária não pode definir um quadro com menos que 5 e mais que 50 <code>pixels</code></summary>

-   If the value entered in the input`board-size`is outside the range of 5 to 50, do:

1.  If the value of`board-size`is less than 5, consider 5`pixels`as default;

2.  If the value of`board-size`is greater than 50, consider 50`pixels`as default.

**what will be checked**

-   The maximum height of the board is 50;

-   The board height is 5 pixels when a value less than 5 is input;

-   The board height is 50 pixels when a value greater than 50 is input.

</details>

## 12 - Make the palette colors randomly generated when loading the page.

<details>
  <summary>A cor preta ainda precisa estar presente e deve ser a primeira na sua paleta de cores.</summary><br />

**what will be checked**

-   The colors generated in the palette are different with each page load;

-   The black color is still present and is the first in their color palette.

</details>
