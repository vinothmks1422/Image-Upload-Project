function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();

    const file = event.dataTransfer.files[0];
    handleFile(file);
}

function handleFileInputChange(event) {
    const file = event.target.files[0];
    handleFile(file);
}

function handleFile(file) {
    const fileName = file.name;
    const fileSize = file.size;
    const fileFormat = file.type.startsWith("image/");

    if (!fileFormat) {
        window.alert('The File Format is Wrong. Please Select Only For Image File)');
    } else {
        window.alert(`Selected file: ${fileName} (${fileSize / 1000} KB)`);
    }

}