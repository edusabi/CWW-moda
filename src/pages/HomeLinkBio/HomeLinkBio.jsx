import styles from './HomeLinkBio.module.css';
import { FaInstagram } from "react-icons/fa";

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
      url: "https://www.instagram.com/centralcapitaljeans?igsh=dXV1eDljdm5veWV4",
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

        {/* Ícones das Redes Sociais */}
        <div className={styles.socials}>
          {/* Instagram */}
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          
          {/* TikTok */}
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
          </svg>

          {/* WhatsApp */}
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </div>

        {/* Lista de Links */}
        <div className={styles.linksContainer}>
          {links.map((link) => (
            <a key={link.id} href={link.url} className={styles.linkCard}>
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