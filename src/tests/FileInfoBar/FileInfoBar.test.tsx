import {render, screen} from '@testing-library/react';
import { describe, beforeEach, test, expect} from 'vitest';
import FileInfoBar from '../../components/FileInfoBar/FileInfoBar';

describe('FileInfoBar', ()=>{
	const spySetFile = vitest.fn(()=>{});
	test('should render all elements of FileInfoBar', ()=>{
		let doc = render(<FileInfoBar file={{name: "file.jpg",type: "image/jpg"} as File} setFile={spySetFile}/>);
		expect(doc.queryAllByTestId("CloseIcon").length).toEqual(1);
		expect(doc.queryAllByTestId("InfoBar").length).toEqual(1);
		expect(doc.queryAllByTestId("FileThumbnail").length).toEqual(1);
		expect(doc.getAllByText("file.jpg").length).toEqual(1);
		expect(doc.getAllByText("png").length).toEqual(1);
	});
})