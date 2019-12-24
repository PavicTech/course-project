let fs = require('fs')


  
    function matrix_multiply(a, b) {

        let widthA = a[0].length
        let heightB = b.length
      
        if (heightB !== widthA) throw new Error(`can not multiply this matrices`)
      
        let newArr = [];
        for (let i = 0; i < a.length; i++) {
          
          newArr[i] = [];
          for (let j = 0; j < b[0].length; j++) {
            if( a[i].length!= b[i].length ) throw Error (" Error: Invalid matrix ") 
      
            let sum = 0;
            for (let k = 0; k < a[0].length; k++) {
              sum += a[i][k] * b[k][j];
            }
            newArr[i][j] = sum;
          }
        }
        return newArr;
      }
      

function matrix_Imprt(filename) {
    let matrixBuffer = fs.readFileSync(filename)
    let matrixStr = matrixBuffer.toString()
    let matrix = JSON.parse(matrixStr)
    return matrix;
}

function matrix_print(m) {
    for (let i = 0; i < m.length; i++)
    {
        console.log(m[i])
    }
}

function matrix_transpose(m) {
    // performs operation
    let height = m.length
    let width  = m[0].length
    // console.log(height, width, m)
    if (height !== width) 
        throw new Error("invalid matrix: it should be a square matrix")
    let temp = matrix_create(height, width)
    for (let i = 0; i < height; i++)
    {
        for (let j = 0; j < width; j++)
        {
            temp[i][j] = m[j][i]
        }
    }
    return temp
}

function matrix_create(height, width) {
    let m = new Array(height)
    for (let i = 0; i < height; i++) {
        m[i] = new Array(width)
        for (let j = 0; j < width; j++)
            m[i][j] = 0
    }
    return m
 }
 function findMinIndex(a, startIndex)
{
    let minValue=a[startIndex]
    let minIndex=startIndex
    for (let i=startIndex+1; i<a.length; i++)
    {
        if (a[i]<minValue)
        {
            minValue= a[i]
            minIndex=i
        }
    }
    return minIndex
}


function seletion(a, firsIndex, secondIndex) { //swap funciton 

    let tmp = a[firsIndex]
    a[firsIndex] = a[secondIndex]

    a[secondIndex] = tmp
}


 module.exports = {
    matrix_create,
    matrix_transpose,
    matrix_print,
    matrix_Imprt,
    matrix_multiply,
    findMinIndex,
    seletion
 }