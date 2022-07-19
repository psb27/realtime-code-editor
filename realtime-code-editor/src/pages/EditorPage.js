import React, { useState } from 'react';
import Client from '../components/Client';
import Editor from '../components/Editor';

const EditorPage = () => {

	const [clients, setClients] = useState([
		{ sockedId: 1, username: 'Prateek' },
		{ sockedId: 2, username: 'Abhay' },
	]);

  return (
    <div className="mainWrap">
      <div className="aside">
		<div className="asideInnner">
			<div className="logo">
				<img 
					className="logoImage"
					src="/code-sync.png"
					alt="logo"
				/>
			</div>
			<h3>Connected</h3>
			<div className="clientsList">

				{ 
				
					clients.map((client) => {
						return <Client 
							key={client.sockedId} 
							username={client.username} 
						/>
					})
				}
			</div>
		</div>
		<button className="btn copyBtn">Copy ROOM ID</button>
		<button className="btn leaveBtn">Leave</button>
      </div>
      <div className="editorWrap">
        <Editor />
      </div>
    </div>
  )
}

export default EditorPage;