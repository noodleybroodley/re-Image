import { describe, test, expect} from 'vitest';
import {convertFile, getOptions}from '../utils/utils';

describe("Utils", ()=>{
	describe("getOptions",()=>{
		test('should generate list of options for png file',()=>{
			expect(getOptions('png')).toEqual(['jpeg']);
		});
		test('should generate list of options for jpeg or jpg file', ()=>{
			expect(getOptions('jpg')).toEqual(['png']);
			expect(getOptions('jpeg')).toEqual(['png']);
		});
	});
	describe("convertFile",()=>{
		test('should convert file to selected type',()=>{
			console.log(convertFile({
				lastModified: 
				1711832349376,
				name: 
				"inDaClub.png",
				size: 
				3234134,
				type: 
				"image/png",
				webkitRelativePath: 
				""} as File,"jpeg"))
		})
	})
})