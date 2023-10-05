"use client";
import React, { useState } from "react";
import SingleResult from "./SingleResult";

function EditResult() {
	const [resultModal, setresultModal] = useState(true);
	return (
		<div className="">
			<div>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				alias officiis asperiores! Ut illum magni quae iusto alias, molestias
				nulla laudantium architecto autem facere natus maxime quis eligendi.
				Possimus accusamus molestiae velit laboriosam est, nesciunt sit libero
				odit reprehenderit facilis.
			</div>
			{resultModal && <SingleResult setresultModal={setresultModal} />}
		</div>
	);
}

export default EditResult;
