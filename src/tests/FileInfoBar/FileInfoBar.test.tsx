import {render, screen} from '@testing-library/react';
import { describe, beforeEach, test, expect} from 'vitest';
import FileInfoBar from '../../components/FileInfoBar/FileInfoBar';

describe('FileInfoBar', ()=>{
	const spySetFile = vitest.fn(()=>{});
	beforeEach(()=>{
		render(<FileInfoBar file={{name: "file.jpg"} as File} setFile={spySetFile}/>);
	})
	test('should render all elements of FileInfoBar', ()=>{
		expect(screen.queryAllByTestId("CloseIcon").length).toEqual(1);
		expect(screen.queryAllByTestId("InfoBar").length).toEqual(1);
		expect(screen.queryAllByTestId("ProgressBar").length).toEqual(1);
		expect(screen.getAllByText("file.jpg").length).toEqual(1);
		expect(screen.queryAllByTestId("Dropdown").length).toEqual(1);
	});
})