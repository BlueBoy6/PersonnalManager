import React from 'react'

export default function Title({level, label}) {
	if(typeof level !== 'number') return null;
	if(level === 1) return <h1 className="title">{label}</h1>
	if(level === 2) return <h2 className="title">{label}</h2>
	if(level === 3) return <h3 className="title">{label}</h3>
	if(level === 4) return <h4 className="title">{label}</h4>
	if(level === 5) return <h5 className="title">{label}</h5>
	if(level === 6) return <h6 className="title">{label}</h6>
}
