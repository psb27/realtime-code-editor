import React, { useState } from 'react';
import Client from '../components/Client';

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
      </div>
      <div className="editorWrap">
        Editor goes here
      </div>
    </div>
  )
}

export default EditorPage;