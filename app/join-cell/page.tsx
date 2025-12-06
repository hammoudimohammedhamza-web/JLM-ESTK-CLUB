"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X } from "lucide-react"
import { supabaseBrowser } from "@/lib/supabase/client"

const cellData = [
  {
    title: "CELLULE DE PROJET",
    image: "/images/team/IMG-20251128-WA0007.jpg",
    role: "Gestion et coordination des projets du club",
  },
  {
    title: "CELLULE DE MEDIA ET DESIGN",
    image: "/images/team/IMG-20251128-WA0012.jpg",
    role: "Documentation des événements et création de contenu visuel",
  },
  {
    title: "CELLULE DE LOGISTIQUE",
    image: "/images/team/IMG-20251128-WA0005.jpg",
    role: "Gestion logistique des événements et ressources",
  },
  {
    title: "CELLULE JLM JUNIOR",
    image: "/images/team/IMG-20251128-WA0008.jpg",
    role: "Initiatives et activités des membres juniors",
  },
]

export default function JoinCellPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCell, setSelectedCell] = useState("")
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
  })

  // 🟩 CELLULE COUNTS (limit 20)
  const [cellCounts, setCellCounts] = useState({
    projet: 0,
    media: 0,
    logistique: 0,
    junior: 0,
  })

  // 🟦 LOAD COUNTS FROM SUPABASE
  const loadCellCounts = async () => {
    const supabase = supabaseBrowser()

    const projet = await supabase
      .from("cellule_projet")
      .select("*", { count: "exact", head: true })

    const media = await supabase
      .from("cellule_media")
      .select("*", { count: "exact", head: true })

    const logistique = await supabase
      .from("cellule_logistique")
      .select("*", { count: "exact", head: true })

    const junior = await supabase
      .from("cellule_junior")
      .select("*", { count: "exact", head: true })

    setCellCounts({
      projet: projet.count || 0,
      media: media.count || 0,
      logistique: logistique.count || 0,
      junior: junior.count || 0,
    })
  }

  useEffect(() => {
    loadCellCounts()
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // 🟦 SUBMIT FORM TO SUPABASE
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!selectedCell) {
      alert("Veuillez sélectionner une cellule valide")
      return
    }

    const supabase = supabaseBrowser()

    // Map cell names to table names
    const cellToTableMap: { [key: string]: string } = {
      "CELLULE DE PROJET": "cellule_projet",
      "CELLULE DE MEDIA ET DESIGN": "cellule_media",
      "CELLULE DE LOGISTIQUE": "cellule_logistique",
      "CELLULE JLM JUNIOR": "cellule_junior"
    }

    const table = cellToTableMap[selectedCell]

    if (!table) {
      console.error("Table not found for selected cell:", selectedCell)
      alert("Erreur: Cellule non valide")
      return
    }

    try {
      const { error } = await supabase.from(table).insert({
        full_name: formData.fullName,
        phone_number: formData.phoneNumber,
      })

      if (error) {
        console.error(error)
        alert("Erreur lors de l'envoi")
        return
      }

      alert("Demande envoyée !")
      setIsModalOpen(false)
      setFormData({ fullName: "", phoneNumber: "" })

      // refresh counts immediately
      loadCellCounts()
    } catch (error) {
      console.error("Error submitting form:", error)
      alert("Une erreur est survenue lors de l'envoi du formulaire")
    }
  }

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-[#0A0414]">
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative bg-gray-900/70 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-md w-full mx-4">
            <button
              onClick={() => {
                setIsModalOpen(false)
                setFormData({ fullName: "", phoneNumber: "" })
              }}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold text-white mb-6">
              Formulaire d&apos;Inscription
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Nom Complet
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700/50 rounded-lg text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Votre nom complet"
                />
              </div>

              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-300 mb-1"
                >
                  Numéro de Téléphone
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 bg-gray-800/80 border border-gray-700/50 rounded-lg text-white focus:ring-2 focus:ring-lime-400 focus:border-transparent"
                  placeholder="Votre numéro de téléphone"
                />
              </div>

              <Button
                type="submit"
                className="w-full mt-6 bg-lime-400/90 hover:bg-lime-300 text-black font-semibold py-2 rounded-lg transition-all"
              >
                Envoyer la demande
              </Button>
            </form>
          </div>
        </div>
      )}

      <div className="relative min-h-screen py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Rejoignez une <span className="text-lime-300">Cellule</span>
          </h1>
          <p className="text-xl text-gray-300 mt-4 max-w-2xl mx-auto">
            Choisissez la cellule qui correspond à vos compétences et intérêts
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cellData.map((cell, index) => {
            const isFull =
              (cell.title === "CELLULE DE PROJET" && cellCounts.projet >= 20) ||
              (cell.title === "CELLULE DE MEDIA ET DESIGN" &&
                cellCounts.media >= 20) ||
              (cell.title === "CELLULE DE LOGISTIQUE" &&
                cellCounts.logistique >= 20) ||
              (cell.title === "CELLULE JLM JUNIOR" &&
                cellCounts.junior >= 20)

            return (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-full max-w-xs">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-3xl transform rotate-1 scale-95 -z-10" />
                  <div className="bg-black/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/5">
                    <div className="p-4 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
                      <h3 className="text-lg font-bold text-center text-lime-300">
                        {cell.title}
                      </h3>
                    </div>
                    <div className="relative w-full flex justify-center items-center bg-black/20">
                      <Image
                        src={cell.image}
                        alt={cell.title}
                        width={300}
                        height={533}
                        className="max-w-full h-auto max-h-[70vh] object-contain"
                        priority
                      />
                    </div>
                    <div className="p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white/90 text-center">
                        {cell.role}
                      </p>
                    </div>
                  </div>
                </div>

                {/* JOIN BUTTON OR FULL MESSAGE */}
                {!isFull ? (
                  <Button
                    onClick={() => {
                      setSelectedCell(cell.title)
                      setIsModalOpen(true)
                    }}
                    className="mt-6 bg-lime-400 hover:bg-lime-300 text-black font-semibold px-8 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Rejoindre
                  </Button>
                ) : (
                  <p className="mt-6 text-red-400 font-bold text-lg">
                    Cellule complète (20/20)
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
