import { useState } from "react";

import Head from "next/head";
import { mask } from "remask";

import Footer from "@/components/Footer";
import HeaderBanner from "@/components/HeaderBanner";
import Checkbox from "@/components/Checkbox";

import { useMyContext } from "@/context";

import { z } from 'zod';
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { submitFormSchema } from "@/types/submitFormSchema";

export async function getServerSideProps({ params }) {
  // Verifica se o plano recebido é uma string se esta entre os três aceitos.
  function isPlanoValido(plano) {
    return typeof plano === 'string' && ['trimestral', 'semestral', 'anual'].includes(plano);
  }

  if (!isPlanoValido(params.plano)) {
    return {
      redirect: {
        destination: '/404',
        permanent: false,
      },
    };
  }

  const plano = params.plano.charAt(0).toUpperCase() + params.plano.slice(1);

  return {
    props: { plano },
  };
}

export default function Cadastro({ plano }) {
  const { user, setUser } = useMyContext()

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [cpf, setCpf] = useState("");
  const [cnpj, setCnpj] = useState("");

  const [cepUser, setCepUser] = useState("");
  const [cepCompany, setCepCompany] = useState("");

  const [phoneUser, setPhoneUser] = useState("");
  const [phoneCompany, setPhoneCompany] = useState("");

  const [hasCNPJ, setHasCNPJ] = useState(false);

  const [paycard, setPaycard] = useState("");
  const [PaymentOption, setPaymentOption] = useState(null)

  const handlePaymentOption = e => {
    setPaymentOption(e.target.value)
  }

  const patternPaycard = ["9999 9999 9999 9999"];
  const patternCEP = ["99999-999"];

  const patternCPF = ["999.999.999-99"];
  const patternCNPJ = ["99.999.999/9999-99"];

  const patternPhoneCompany = ["(99) 9999-9999"];
  const patternPhoneUser = ["(99) 99999-9999"];

  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: zodResolver(submitFormSchema)
  });

  function onSubmit(data) {
    setOutput(JSON.stringify(data, null, 2))
    alert(JSON.stringify(data, null, 2))
  };

  return (
    <>
      <Head>
        <title>Cadastro | Cadê o Engenheiro?</title>
      </Head>

      <HeaderBanner />

      <main className="mt-[43px] sm:mt-[118px]">
        <h5 className="text-secondary text-lg leading-6 font-medium text-center">
          Cadastro
        </h5>
        <h3 className="text-primary text-4xl font-bold text-center after-bottom opacity-0 animate-slide-up">
          Plano {plano}
        </h3>

        <div className="max-w-[1086px] mx-auto mt-[58px]">
          <p className="text-base text-center font-normal leading-5 text-body">
            Precisamos de algumas informações iniciais para seu cadastro.
          </p>
        </div>

        <form
          action="/contato" method="post"
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl mx-auto mt-[60px] mb-[197px] px-3"
        >
          {/* Dados Pessoas/ Sua Empresa */}
          <div className="space-y-5 mt-2.5">
            <h4 className="text-primary text-xl font-bold text-left">
              Dados Pessoais:
            </h4>

            <div className="bg-secondary h-0.5 rounded-full w-full" />

            <label htmlFor="nameUser" className="flex flex-1 flex-col">
              <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                Nome Completo:
              </span>
              <input
                required
                type="text"
                value={name}
                id="nameUser"
                {...register("name")}
                onChange={(e) => setName(e.target.value)}
                className={`input !max-h-[39px] ${errors.name ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
            </label>

            <label htmlFor="cpf" className="flex flex-1 flex-col">
              <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                CPF:
              </span>
              <input
                id="cpf"
                required
                type="text"
                {...register("cpf")}
                placeholder="000.000.000-00"
                value={mask(cpf, patternCPF)}
                onChange={(e) => setCpf(e.target.value)}
                className={`input !max-h-[39px] ${errors.name ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
            </label>

            <label htmlFor="email" className="flex flex-1 flex-col">
              <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                E-mail:
              </span>
              <input
                required
                id="email"
                type="email"
                value={email}
                {...register("email")}
                onChange={(e) => setEmail(e.target.value)}
                className={`input !max-h-[39px] ${errors.name ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
            </label>

            <label htmlFor="phoneUser" className="flex flex-1 flex-col">
              <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                Celular:
              </span>
              <input
                id="phoneUser"
                type="text"
                {...register("phoneUser")}
                placeholder="(00) 90000-0000"
                value={mask(phoneUser, patternPhoneUser)}
                onChange={(e) => setPhoneUser(e.target.value)}
                className={`input !max-h-[39px] ${errors.name ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
            </label>

            <label htmlFor="addressUser" className="flex flex-1 flex-col">
              <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                Endereço:
              </span>
              <input
                type="text"
                id="addressUser"
                {...register("addressUser")}
                className={`input !max-h-[39px] ${errors.name ? "focus:ring-red-500" : "focus:ring-secondary"}`}
              />
            </label>

            <div className="flex justify-between gap-2">
              <label htmlFor="cepAddressUser" className="flex flex-col w-1/5">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  CEP:
                </span>
                <input
                  type="text"
                  id="cepAddressUser"
                  placeholder="00000-000"
                  value={mask(cepUser, patternCEP)}
                  onChange={(e) => setCepUser(e.target.value)}
                  className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                />
              </label>

              <label htmlFor="numAddressUser" className="flex flex-col w-1/5">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  Número:
                </span>
                <input
                  type="string"
                  id="numAddressUser"
                  className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                />
              </label>

              <label htmlFor="address2User" className="flex flex-col w-3/5">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  Complemento:
                </span>
                <input
                  type="text"
                  id="address2User"
                  placeholder="Casa, Apartamento, Bloco..."
                  className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                />
              </label>
            </div>

            <Checkbox title="Você possui CNPJ?" checked={hasCNPJ} handleHasChecked={() => setHasCNPJ(!hasCNPJ)} />
            {hasCNPJ && (
              <div className="space-y-5 mt-10">
                <h4 className="text-primary text-xl font-bold text-left">
                  Sua Empresa:
                </h4>

                <div className="bg-secondary h-0.5 rounded-full w-full" />

                <label htmlFor="nameCompany" className="flex flex-1 flex-col">
                  <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                    Nome Completo:
                  </span>
                  <input
                    type="text"
                    id="nameCompany"
                    className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                  />
                </label>

                <label htmlFor="cnpj" className="flex flex-1 flex-col">
                  <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                    CNPJ
                  </span>
                  <input
                    id="cnpj"
                    type="text"
                    placeholder="00.000.000/0000-00"
                    value={mask(cnpj, patternCNPJ)}
                    onChange={(e) => setCnpj(e.target.value)}
                    className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                  />
                </label>

                <label htmlFor="addressCompany" className="flex flex-1 flex-col">
                  <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                    Endereço:
                  </span>
                  <input
                    type="text"
                    id="addressCompany"
                    className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                  />
                </label>

                <div className="flex justify-between gap-2">
                  <label htmlFor="cepAddressCompany" className="flex flex-col w-1/5">
                    <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                      CEP:
                    </span>
                    <input
                      type="text"
                      id="cepAddressCompany"
                      placeholder="00000-000"
                      value={mask(cepCompany, patternCEP)}
                      onChange={(e) => setCepCompany(e.target.value)}
                      className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                    />

                  </label>

                  <label htmlFor="numAddressCompany" className="flex flex-col w-1/5">
                    <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                      Número:
                    </span>
                    <input
                      type="string"
                      id="numAddressCompany"
                      className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                    />
                  </label>

                  <label htmlFor="address2Company" className="flex flex-col w-3/5">
                    <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                      Complemento:
                    </span>
                    <input
                      type="text"
                      id="address2Company"
                      placeholder="Casa, Apartamento, Bloco..."
                      className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                    />
                  </label>
                </div>

                <label htmlFor="phoneCompany" className="flex flex-1 flex-col">
                  <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                    Telefone:
                  </span>
                  <input
                    type="text"
                    id="phoneCompany"
                    placeholder="(00) 0000-0000"
                    value={mask(phoneCompany, patternPhoneCompany)}
                    onChange={(e) => setPhoneCompany(e.target.value)}
                    className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                  />
                </label>
              </div>
            )}

          </div>

          {/* Pagamento */}
          <div className="space-y-5 mt-10">
            <h4 className="text-primary text-xl font-bold text-left">
              Pagamento:
            </h4>

            <div className="bg-secondary h-0.5 rounded-full w-full" />

            <div className="space-y-2.5">
              <div className="flex items-center">
                <input name="payment" id="paycard" value="paycard" onChange={handlePaymentOption} type="radio" className="w-4 h-4 transition-colors bg-white border rounded-full appearance-none cursor-pointer peer border-body checked:border-primary checked:bg-primary/90 checked:hover:border-primary checked:hover:bg-primary/95 focus:outline-none checked:focus:border-primary checked:focus:bg-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-ice disabled:bg-light" />
                <label htmlFor="paycard" className="pl-2 cursor-pointer text-body peer-disabled:cursor-not-allowed peer-disabled:text-body/50">
                  Cartão de crédito
                </label>
              </div>

              {PaymentOption === "paycard" &&
                <div className="p-2.5">
                  <label htmlFor="paycard-name" className="flex flex-1 flex-col">
                    <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                      Nome do Titular:
                    </span>
                    <input
                      type="text"
                      id="paycard-name"
                      className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                    />
                  </label>

                  <div className="mt-2.5 flex flex-col ss:flex-row gap-2 items-end justify-between">
                    <label htmlFor="paycard-number" className="flex flex-col w-full ss:w-3/5">
                      <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                        Dados do Cartão:
                      </span>
                      <input
                        type="text"
                        id="paycard-number"
                        placeholder="**** **** **** ****"
                        value={mask(paycard, patternPaycard)}
                        onChange={(e) => setPaycard(e.target.value)}
                        className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                      />
                    </label>

                    <div className="flex gap-2 w-full ss:w-2/5">
                      <label htmlFor="paycard-valid" className="flex flex-col flex-1">
                        <input
                          type="text"
                          id="paycard-valid"
                          placeholder="MM/AA"
                          className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                        />
                      </label>

                      <label htmlFor="paycard-cvv" className="flex flex-col flex-1">
                        <input
                          type="text"
                          maxLength={3}
                          id="paycard-cvv"
                          placeholder="CVV"
                          pattern="/^[0-9]{3,4}$/"
                          className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                        />
                      </label>
                    </div>
                  </div>

                  <label htmlFor="paycard-cvv" className="flex flex-col flex-1">
                    <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                      Parcelas:
                    </span>
                    <select className="appearance-none input !max-h-[39px] !py-1.5 focus:ring-secondary">
                      <option>1x de R$ 31,33 sem juros</option>
                      <option>2x de R$ 16,23 sem juros</option>
                      <option>3x de R$ 13,13 sem juros</option>
                    </select>
                  </label>
                </div>
              }

              <div className="flex items-center">
                <input name="payment" id="ticket" value="ticket-bank" onChange={handlePaymentOption} type="radio" className="w-4 h-4 transition-colors bg-white border rounded-full appearance-none cursor-pointer peer border-body checked:border-primary checked:bg-primary/90 checked:hover:border-primary checked:hover:bg-primary/95 focus:outline-none checked:focus:border-primary checked:focus:bg-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-ice disabled:bg-light" />
                <label htmlFor="ticket" className="pl-2 cursor-pointer text-body peer-disabled:cursor-not-allowed peer-disabled:text-body/50">
                  Boleto bancário
                </label>
              </div>

              {PaymentOption === "ticket-bank" &&
                <div className="p-2.5">
                  <p className="text-body">Após clicar em &ldquo;Finalizar compra&rdquo; você receberá o seu boleto bancário. É possível imprimi-lo e pagar pelo site do seu banco ou em uma casa lotérica. <b>Nota:</b> O pedido será confirmado apenas após a confirmação do pagamento.</p>
                </div>
              }

              <div className="flex items-center">
                <input name="payment" id="pix" value="pix" onChange={handlePaymentOption} type="radio" className="w-4 h-4 transition-colors bg-white border rounded-full appearance-none cursor-pointer peer border-body checked:border-primary checked:bg-primary/90 checked:hover:border-primary checked:hover:bg-primary/95 focus:outline-none checked:focus:border-primary checked:focus:bg-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:border-ice disabled:bg-light" />
                <label htmlFor="pix" className="pl-2 cursor-pointer text-body peer-disabled:cursor-not-allowed peer-disabled:text-body/50">
                  Pix
                </label>
              </div>

              {PaymentOption === "pix" &&
                <div className="p-2.5">
                  <p className="text-body">Após clicar em &ldquo;Finalizar compra&rdquo; você receberá uma chave pix ou o QRCode. É possível imprimi-lo e pagar pelo site do seu banco. <b>Nota:</b> O pedido será confirmado apenas após a confirmação do pagamento.</p>
                </div>
              }

            </div>
          </div>

          {/* Confirmação */}
          <div className="space-y-5 mt-10">
            <h4 className="text-primary text-xl font-bold text-left">
              Confirmação:
            </h4>

            <div className="bg-secondary h-0.5 rounded-full w-full" />

            <div className="flex gap-2.5">
              <label htmlFor="password" className="flex flex-1 flex-col">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  Senha:
                </span>
                <input
                  type="password"
                  id="password"
                  className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                />
              </label>

              <label htmlFor="passwordConfirm" className="flex flex-1 flex-col">
                <span className="text-base font-normal leading-[23px] text-body ml-1.5">
                  Confirmar Senha:
                </span>
                <input
                  type="passwordConfirm"
                  id="passwordConfirm"
                  className={`input !max-h-[39px] invalid:focus:ring-red-500 focus:ring-secondary`}
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="Enviar"
            className="bg-secondary rounded-full block ml-auto text-xl mt-10 font-bold leading-5 text-white h-[42px] w-[112px] text-center border-none focus:ring-2 ring-white outline-none"
          />

        </form>
      </main>

      <Footer />
    </>
  );
}
