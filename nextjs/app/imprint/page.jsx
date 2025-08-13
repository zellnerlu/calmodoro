export default function Impressum({ show, handleClose }) {
    return (
        <section show={show} onHide={handleClose} backdrop='static' keyboard={false}>
            <h1>Impressum</h1>
            <div>
                <h6>Angaben gemäß § 5 TMG</h6>
                <p>
                    Ludwig Zellner
                    <br />
                    Prinz-Eugen-Str. 2<br />
                    80804 München
                </p>
                <h6>Kontakt</h6>
                <p>E-Mail: calmodoro@gmail.com</p>
            </div>
        </section>
    );
}
