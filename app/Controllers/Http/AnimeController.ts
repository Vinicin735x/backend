import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Anime from '../../Models/Anime'
import AnimeValidator from '../../Validators/AnimeValidator'

export default class AnimeController {
  public async index({ }: HttpContextContract) {
    const Anime = await Anime.all()
    return Anime
  }

  public async store({ request }: HttpContextContract) {
    const data = await request.validate(AnimeValidator)
    const topic = await Anime.create({ ...data })
    return topic
  }

  public async show({ params, response }: HttpContextContract) {
    try {
      const topic = await Anime.findOrFail(params.id)
      return topic
    } catch (error) {
      response.status(400).send("Tópico não encontrado!!!")
    }
  }

  public async update({ request, params, response }: HttpContextContract) {
    const { nome } = await request.validate(AnimeValidator)
    try {
      const topic = await Anime.findOrFail(params.id)
      topic.nome = nome
      await topic.save()
      return topic

    } catch (error) {
      response.status(400).send("Tópico não encontrado!!!")
    }
  }

  public async destroy({ params, response }: HttpContextContract) {
    try {
      const topic = await Anime.findOrFail(params.id)
      await topic.delete()
      return topic
    } catch (error) {
      response.status(400).send("Tópico não encontrado!!!")
    }
  }
}