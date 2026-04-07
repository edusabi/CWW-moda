import styles from './HomeLinkBio.module.css';

const HomeLinkBio = () => {
  const links = [
    {
      id: 1,
      title: "GRUPO DE ATACADO",
      url: "https://chat.whatsapp.com/DH0s9MnN2kD9Fol8GrFRox?mode=gi_t",
      image:"/logoGrupo.png"
    },
    {
      id: 2,
      title: "FALAR COM VENDEDOR",
      url: "https://wa.me/5581996457525",
      image: "/logoZap.png"
    },
    {
      id: 3,
      title: "INSTAGRAM",
      url: "https://www.instagram.com/centralcapitalfitness?igsh=dXV1eDljdm5veWV4",
      image: "/logoInsta.png" 
    }
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        
        {/* Banner com a maquiagem no fundo */}
        <div className={styles.header}></div>

        {/* Foto de Perfil */}
        <div className={styles.profileContainer}>
          <img 
            src="/logo.jpeg" 
            alt="CCW Moda Fitness" 
            className={styles.profilePic} 
          />
        </div>

        {/* Título e Subtítulo */}
        <div className={styles.info}>
          <h1 className={styles.name}>CCW Moda Fitness</h1>
          <p className={styles.subtitle}>Seu próximo nível começa no que você veste.</p>
        </div>

        {/* Ícones das Redes Sociais (Agora com as imagens e links do array) */}
        <div className={styles.socials}>
          {links.map((link) => (
            <a key={`icon-${link.id}`} href={link.url} target="_blank" rel="noopener noreferrer">
              <img 
                src={link.image} 
                alt={`Ícone ${link.title}`} 
                className={styles.icon} 
                style={{ objectFit: 'contain' }} /* Adicionado para evitar distorção da imagem */
              />
            </a>
          ))}
        </div>

        {/* Lista de Links */}
        <div className={styles.linksContainer}>
          {links.map((link) => (
            <a key={link.id} href={link.url} className={styles.linkCard} target="_blank" rel="noopener noreferrer">
              <img src={link.image} alt={`Imagem do link ${link.title}`} className={styles.linkImage} />
              <span className={styles.linkText}>{link.title}</span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}

export default HomeLinkBio;