
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Contato</h1>
      <form >
        <input type="text" placeholder="Digite seu nome" required />
        <input type="email" placeholder="Digite seu e-mail" required />
        <input type="tel" placeholder="Digite seu telefone" required />
        <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua mensagem" required></textarea>
      </form>
    </div>
  )
}

export default Contact