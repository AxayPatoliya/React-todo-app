import React from 'react'

export default function Footer() {
    let footerStyle = {
        border: "2px solid skyblue"
    }
    return (
        <footer className="bg-light text-dark my-3 py-3 px-3 text-center" style={footerStyle}>
            Copyright &copy; <b className="text-info">AD Developers</b> 2021-2022 
        </footer>
    )
}
