import React, { Component } from 'react';
import './App.css'; // Importez le fichier CSS

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Personne: {
        fullName: "Dandan Gadjro David Israel",
        bio: "Développeur Full Stack passionné par React.",
        imgSrc: "./assets/MA PHOTO.png",
        profession: "Développeur Web"
      },
      montre: false,
      timeSinceMount: 0
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      montre: !prevState.montre
    }));
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { Personne, montre, timeSinceMount } = this.state;

    // Styles dynamiques
    const buttonStyle = {
      backgroundColor: montre ? "red" : "green",
      color: "white",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer"
    };

    const profileStyle = {
      display: montre ? "block" : "none",
      marginTop: "20px",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "10px",
      backgroundColor: "#f9f9f9"
    };

    const timeStyle = {
      marginTop: "20px",
      fontSize: "1.2em",
      color: timeSinceMount > 10 ? "red" : "black" // Change la couleur après 10 secondes
    };

    return (
      <div className="App">
        <h1>Mon Premier Composant de Classe</h1>
        <button style={buttonStyle} onClick={this.toggleShow}>
          {montre ? "Cacher le profil" : "Afficher le profil"}
        </button>

        <div style={profileStyle}>
          <h2>{Personne.fullName}</h2>
          <img src={Personne.imgSrc} alt={Personne.fullName} />
          <p>{Personne.bio}</p>
          <p>Profession: {Personne.profession}</p>
        </div>

        <p style={timeStyle}>
          Temps écoulé depuis le montage : {timeSinceMount} secondes
        </p>
      </div>
    );
  }
}

export default App;