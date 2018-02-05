import{ Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string= "Document Dashboard"
	
	documents: Document[] = [
		{
			title: 'My First Doc',
			description: 'asdfasdfasdf asdfasdf',
			file_url: 'http://google.com',	
			updated_at: '11/11/16',
			image_url: 'https://media.gettyimages.com/videos/binary-code-tunnel-video-id463210692?s=640x640'
		},
		{
			title: 'My Second Doc',
			description: 'asdfasdfasdf asdfasdf',
			file_url: 'http://google.com',	
			updated_at: '11/11/16',
			image_url: 'http://codecondo.com/wp-content/uploads/2014/04/5-Coding-Challenges-to-Help-You-Train-Your-Brain.jpg'
		},
		{
			title: 'My Last Doc',
			description: 'asdfasdfasdf asdfasdf',
			file_url: 'http://google.com',	
			updated_at: '11/11/16',
			image_url: 'https://webrobots.io/wp-content/uploads/2016/11/javascript-coding-1000x576.jpg'
		}
	]	
}