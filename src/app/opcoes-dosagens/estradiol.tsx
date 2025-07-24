import Image from "next/image";
import styles from "../layout.module.css";


function Oral(){
	return (
		<div className={styles.content}>
		<h3>Oral</h3>
		<ul><li>Entre 4mg e 8mg de estradiol por dia + Bloqueador de testosterona.</li></ul>
		<p>
		Comece com 4mg por dia. Faça exames de sangue após 3 meses de uso e faça o <a href="/reajuste">reajuste de dose</a> se necessário.
		</p>
		<p>
		Consulte a duração dos adesivos e não use por mais tempo do que recomenda a embalagem, pois não será efetivo.
		</p>
		<p>
		Comece com 100μg por dia. Faça exames de sangue após 3 meses de uso e faça o <a href="/reajuste">reajuste de dose</a> se necessário.
		</p>
		<p>
		Siga as instruções da embalagem ou da bula para aplicar o adesivo.
		</p>
		<ExameSangueAviso via="oral (Comprimidos)" />
		</div>
	)
}

function Adesivo(){
	return (
		<div className={styles.content}>
		<h3>Adesivo</h3>
		<ul><li>Entre 100μg e 400μg por dia + Bloqueador de Testosterona.</li></ul>
		<p>
			Consulte a embalagem e saiba quantos μg de estradiol o adesivo libera por dia. Se o adesivo liberar 50μg por dia, você vai precisar de 2 adesivos!
		</p>
		<p>
			Consulte a duração dos adesivos e não use por mais tempo do que recomenda a embalagem, pois não será efetivo.
		</p>
		<p>
			Comece com 100μg por dia. Faça exames de sangue após 3 meses de uso e faça o <a href="/reajuste">reajuste de dose</a> se necessário.
		</p>
		<p>
			Siga as instruções da embalagem ou da bula para aplicar o adesivo.
		</p>
		<ExameSangueAviso via="transdermal (Adesivos)"/>
		</div>
	)
}


function Gel(){
	return (
		<div className={styles.content}>
		<h3>Gel</h3>
		<ul><li>Entre 3mg e 6mg por dia + Bloqueador de Testosterona.</li></ul>

		<p>
		Consulte a embalagem e saiba quantos mg de estradiol cada pump contém. Numa calculadora, divida:
		</p>
		<p>
		Dose diária de estradiol / Estradiol por pump
		</p>
		<p>
		Se a embalagem indicar 0.6mg de estradiol por pump e você começar com uma dose de 3mg por dia, faça 3/0.6 = 5.
		</p>
		<p>
		No caso de uma dose de 3mg por dia e uma embalagem que solta 0.6mg por pump, você usará 5 pumps por dia. Aplique sempre no mesmo horário, todos os dias.
		</p>
		<p>
		Faça as contas de acordo com o que a embalagem que <strong>você</strong> comprou e ajuste.
		</p>

		<span>
			Comece com 3mg por dia.{' '}
			<ExameSangueAviso via="transdermal (Gel)" />
		</span>

		<h3>Aplicação do gel</h3>
		<Image src="/Aplicacao_gel.png" alt="aplicação gel" width={187} height={487} ></Image>
		<p>Assim como na imagem, aplique gel na parte externa dos braços ou na parte interna superior das coxas.</p>
		<p>
		Se for mais cômodo, você pode espalhar o gel em dois ou mais locais de aplicação dif=erentes quando for usar.
		</p>
		<p>
		 <strong>Importante:</strong> Você deve <strong>SEMPRE</strong> tomar banho antes de aplicar o gel e, se possível, depile a(s) área(s) de aplicação. Sujeira, impurezas, suor e pelos podem diminuir a absorção do gel pela sua pele.
		</p>
		</div>
	)
}

function Injecao(){
	return (
		<div className={styles.content}>
		<h3>Injeção IM (Intramuscular)</h3>
		<ul>
			<li>
			10mg a cada 14 dias; OU
			</li>
			<li>
			3mg a cada 7 dias.
			</li>
		</ul>
		<p>
		(Dosagens referentes à uma ampola com 10mg Enantato de estradiol + 150mg Algestona Acetofenida)
		</p>
		<p>
		A TH feita com injeções <strong>NÃO</strong> precisa de bloqueadores de Testosterona! A concentração de Estradiol que entra no corpo de uma vez só é alta o suficiente para que a sua produção natural de Testosterona quase pare, e seus níveis de Testosterona se reduzam para os mesmos níveis que buscamos nos outros métodos com uso de bloqueadores.
		</p>
		<strong>Não tome bloqueadores de testosterona se você fizer TH com medicamentos injetáveis.</strong>
		<p>Para aprender a como realizar a aplicação em si mesma, consulte o <a href="/manual-aplicacao">Manual de Aplicação</a>!</p>
		<br />
		<ExameSangueAviso via="injetável" />
		</div>
	)
}

function ExameSangueAviso(props: {via: string}){
	return (
		<>
		<span>
		Faça exames de sangue após 3 meses de uso e faça o <a href="/reajuste">reajuste de dose</a> se necessário.
		</span>
		<p>
		Consulte os <a href="/exame-sangue">exames de sangue</a> que você deve fazer se escolher a TH pela via {props.via}
		</p>
		</>
	)
}

export default function Estradiol(){
	return (
		<>
		<h2>Estradiol</h2>

		<Oral />
		<Adesivo />
		<Gel />
		<Injecao />
		</>
	)
}