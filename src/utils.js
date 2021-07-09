
import { thumbnailDataType, cadDataType, femDataType, matrixDataType } from "./data-types";


export function doCheckCard1(name, thumbnailName, thumbnailSize, description, author, contact) {
    if (!name || !thumbnailName || !description) {
        alert("name / thumbnail / description must not be empty")
        return false
    }
    if (!thumbnailDataType[thumbnailName.split('.')[1]]) {
        alert("extension of thumbnail is invalid")
        return false
    }
    if (thumbnailSize > 1000000000) {
        alert("size of thumbnail must be lower than 1GB")
        return false
    }
    return true
}

export function doCheckCard2(cadFileName, cadFileSize, cadThumbnailName, cadThumbnailSize) {
    if (cadFileName) {
        if (!cadThumbnailName) {
            alert("if you upload CAD file, you must also upload CAD sample image")
            return false
        }
        if (!cadDataType[cadFileName.split('.')[1]]) {
            alert("extension of CAD file is invalid")
            return false
        }
        if (!thumbnailDataType[cadThumbnailName.split('.')[1]]) {
            alert("extension of CAD sample image is invalid")
            return false
        }
        if (cadFileSize > 1000000000) {
            alert("size of CAD file must be lower than 1GB")
            return false
        }
        if (cadThumbnailSize > 1000000000) {
            alert("size of CAD sample image must be lower than 1GB")
            return false
        }
    } else {
        if (cadThumbnailName) {
            alert("if you don't upload CAD file, you must not upload CAD sample image")
            return false
        }
    }
    return true
}

export function doCheckCard3(femFileName, femFileSize, femThumbnailName, femThumbnailSize, elementType, elementCount, nodeCount) {
    if (femFileName) {
        if (!femThumbnailName) {
            alert("if you upload FEM file. you must also upload FEM sample image")
            return false
        }
        if (!femDataType[femFileName.split('.')[1]]) {
            alert("extension of CAD file is invalid")
            return false
        }
        if (!thumbnailDataType[femThumbnailName.split('.')[1]]) {
            alert("extension of CAD sample image is invalid")
            return false
        }
        if (femFileSize > 1000000000) {
            alert("size of FEM file must be lower than 1GB")
            return false
        }
        if (femThumbnailSize > 1000000000) {
            alert("size of FEM sample image must be lower than 1GB")
            return false
        }
    } else {
        if (femThumbnailName) {
            alert("if you don't upload FEM file, you must not upload FEM sample image")
            return false
        }
        if (elementType || elementCount > 0 || nodeCount > 0) {
            alert("if you don't upload FEM file, you must not input Element Type / Element Count / Node Count")
            return false
        }
    }
    return true
}

export function doCheckCard4(matrixFileName, matrixFileSize, matrixThumbnailName, matrixThumbnailSize) {
    if (matrixFileName) {
        if (!matrixFileName) {
            alert("if you upload Matrix file, you must also upload Matrix sample image")
            return false
        }
        if (!matrixDataType[matrixFileName.split('.')[1]]) {
            alert("extension of Matrix file is invalid")
            return false
        }
        if (!thumbnailDataType[matrixThumbnailName.split('.')[1]]) {
            alert("extension of Matrix sample image is invalid")
            return false
        }
        if (matrixFileSize > 1000000000) {
            alert("size of Matrix file must be lower than 1GB")
            return false
        }
        if (matrixThumbnailSize > 1000000000) {
            alert("size of Matrix sample image must be lower than 1GB")
            return false
        }
    } else {
        if (matrixFileName) {
            alert("if you don't upload Matrix file, you must not upload Matrix sample image")
            return false
        }
    }
    return true
}

export function doCheckCard234(cadFileName, femFileName, matrixFileName) {
    if (!cadFileName && !femFileName && !matrixFileName) {
        alert("either of CAD / FEM / Matrix file must be uploaded")
        return false
    }
    return true
}