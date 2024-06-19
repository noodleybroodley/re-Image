import { describe, test, expect} from 'vitest';
import {convertFile, getOptions}from '../utils/utils';

describe("Utils", ()=>{
	describe("getOptions",()=>{
		test('should generate list of options for png file',()=>{
			expect(getOptions('png')).toEqual(['jpeg','apng','avif','gif','webp']);
		});
		test('should generate list of options for jpeg or jpg file', ()=>{
			expect(getOptions('jpg')).toEqual(['png','apng','avif','gif','webp']);
			expect(getOptions('jpeg')).toEqual(['png','apng','avif','gif','webp']);
		});
	});
	describe("convertFile",()=>{
		const types = ['png','jpeg','apng','avif','gif','webp'];
		test('should convert file to desired type',()=>{
			for(let typeA of types){
				let newTypes = getOptions(typeA);
				for(let typeB of newTypes){
					let newFile = convertFile({
						lastModified: 
						1711832349376,
						name: 
						"inDaClub."+typeA,
						size: 
						3234134,
						type: 
						"image/"+typeA,
						webkitRelativePath: 
						""} as File,typeB);
					expect(newFile.name).toEqual("inDaClub."+typeB);
					expect(newFile.type).toEqual("image/"+typeB);
				}
			}
		});
	})
})