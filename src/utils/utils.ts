export function getOptions(type: string){
	let options = new Set(['png','jpeg','apng','avif','gif','webp']);
	let newType = type.toLowerCase();
	if(newType == 'jpg') newType = 'jpeg';
	options.delete(newType);
	return Array.from(options);
}

export function convertFile(file: File, type: string){
	let newNameArray = file.name.split('.');
	newNameArray[newNameArray.length-1] = type;
	const newName = newNameArray.join('.');
	const newType = `image/${type}`;
	return new File([file], newName, {type: newType});
}

export function downloadFile(dataUrl: string, fileName: string) {
	const link = document.createElement("a");
	link.href = dataUrl;
	link.download = fileName;
	link.click();
}