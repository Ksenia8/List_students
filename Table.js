"use strict";

class Table {
    
    constructor (options) {
        this.rows = [];

        // если переменная - НЕ объект
        if (typeof options !== "object") {
            // то сделаем её пустым объектом
            options = {};
        }

        if (typeof options.tableClass !== "undefined") {
            this.tableClass = options.tableClass;
        } else {
            this.tableClass = "";
        }

        if (typeof options.openTableTag !== "undefined") {
            this.openTableTag = options.openTableTag;
        } else {
            this.openTableTag = "<table class='" + this.tableClass + "'>";
        }

        if (typeof options.closeTableTag !== "undefined") {
            this.closeTableTag = options.closeTableTag;
        } else {
            this.closeTableTag = "</table>";
        }

        if (typeof options.openRowTag !== "undefined") {
            this.openRowTag = options.openRowTag;
        } else {
            this.openRowTag = "<tr>";
        }

        if (typeof options.closeRowTag !== "undefined") {
            this.closeRowTag = options.closeRowTag;
        } else {
            this.closeRowTag = "</tr>";
        }

        if (typeof options.openCellTag !== "undefined") {
            this.openCellTag = options.openCellTag;
        } else {
            this.openCellTag = "<td>";
        }

        if (typeof options.closeCellTag !== "undefined") {
            this.closeCellTag = options.closeCellTag;
        } else {
            this.closeCellTag = "</td>";
        }

        if (typeof options.openHeadingTag !== "undefined") {
            this.openHeadingTag = options.openHeadingTag;
        } else {
            this.openHeadingTag = "<th>";
        }

        if (typeof options.closeHeadingTag !== "undefined") {
            this.closeHeadingTag = options.closeHeadingTag;
        } else {
            this.closeHeadingTag = "</th>";
        
        }
    }



addCells (cellType, cells) {
    let row = [];

    for (let i=0; i<cells.length; i++) {
        // создаем объект из двух свойств
        let cell = {
            value: cells[i],
            type: cellType
        };

        // добавляем объект в массив с данными одной строки
        row.push(cell);
    }

    // строку добавляем в массив строк
    this.rows.push(row);
}

        
addHeadingsRow () {
    this.addCells("heading", arguments);
}


addRow () {
    this.addCells("data", arguments);
}

generate () {
    let html = this.openTableTag;

        // this.rows - это массив строк, каждый элемент в нём - это тоже массив
        for (let i=0; i<this.rows.length; i++) {
            let row = this.rows[i];

            html += this.openRowTag;

            for (let j=0; j<row.length; j++) {
                let cell = row[j];

                if (cell.type === "heading") {
                    html += this.openHeadingTag;
                } else {
                    html += this.openCellTag;
                }

                html += cell.value;

                if (cell.type === "heading") {
                    html += this.closeHeadingTag;
                } else {
                    html += this.closeCellTag;
                }
            }

            html += this.closeRowTag;
        }

    html += this.closeTableTag;

    return html;
}
}
