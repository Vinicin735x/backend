import { DateTime } from 'luxon'
import { BaseModel, column, } from '@ioc:Adonis/Lucid/Orm'

export default class Anime extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public autor: string

  @column()
  public data_lancamento: DateTime

  @column()
  public nome: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

}
