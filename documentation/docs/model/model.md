---
title: Модель данных
sidebar_position: 3
description: Сводная информация о сущностях, атрибутах, доступе и технологиях хранения
---

# Модель данных

## Сущности системы

В таблице ниже приведены все сущности, их атрибуты, кто имеет доступ и характер данных.

<table>
  <thead>
    <tr>
      <th>Сущность</th>
      <th>Атрибуты</th>
      <th>Доступ</th>
      <th>Характер данных</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Пользователь</td>
      <td>
        User_id, First_name, Second_name, Surname, Client_status, Client_type,<br/>
        Client_subscription, Age, Passport, INN, Sex, Address, Phone_number
      </td>
      <td>Система ДБО, Модуль приема данных, Модуль правил, Аналитик</td>
      <td>транзакционные</td>
    </tr>
    <tr>
      <td>Транзакция</td>
      <td>
        Transaction_id, User_id, Event_type, Event_time, Amount, Currency,<br/>
        Session_id, Transaction_type
      </td>
      <td>Система ДБО, Модуль приема данных, Модуль правил, Аналитик</td>
      <td>транзакционные</td>
    </tr>
    <tr>
      <td>Сессия</td>
      <td>
        Session_id, Ip_address, Geolocation(lat,lon), Device_Type, Entry_time, User_id
      </td>
      <td>Система ДБО, Модуль приема данных, Модуль правил, Аналитик</td>
      <td>транзакционные</td>
    </tr>
    <tr>
      <td>Правило</td>
      <td>
        Rule_id, Name, Description, Threshold, Status, Date_creation
      </td>
      <td>Модуль правил, Аналитик, Служба ИБ</td>
      <td>транзакционные</td>
    </tr>
    <tr>
      <td>Инцидент</td>
      <td>
        Incident_id, Risk_assessment, Status, Date_creation, Date_completion,<br/>
        Reason, User_id, Rule_id
      </td>
      <td>Модуль правил, Аналитик, Служба ИБ</td>
      <td>транзакционные + аналитические</td>
    </tr>
    <tr>
      <td>Сотрудник</td>
      <td>
        Employee_id, Role, First_name, Second_name, Surname, Passport, Sex,<br/>
        Phone_number, Mail
      </td>
      <td>Система ДБО, Аналитик</td>
      <td>транзакционные</td>
    </tr>
    <tr>
      <td>Решения</td>
      <td>
        Decision_id, Incident_id, Employee_id, Decision_type, Justification,<br/>
        Date_completion, Source
      </td>
      <td>Система ДБО, Аналитик, Служба ИБ</td>
      <td>транзакционные</td>
    </tr>
    <tr>
      <td>Аудит</td>
      <td>
        Log_id, User_id, User_type, Action, Time_action, Result, Ip_address, Session_id
      </td>
      <td>Аналитик, Служба ИБ</td>
      <td>аналитические</td>
    </tr>
    <tr>
      <td>Уведомление</td>
      <td>
        Notification_id, Incident_id, Recipient_type, Recipient_id, Channel,<br/>
        Notification_time, Status, Message_summary
      </td>
      <td>Аналитик, Служба ИБ</td>
      <td>аналитические</td>
    </tr>
  </tbody>
</table>

## Технологии хранения

<table>
  <thead>
    <tr>
      <th>Шаг</th>
      <th>Пользователь</th>
      <th>Транзакция</th>
      <th>Сессия</th>
      <th>Правило</th>
      <th>Инцидент</th>
      <th>Сотрудник</th>
      <th>Решения</th>
      <th>Аудит</th>
      <th>Уведомление</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Сколько данных храним?</td>
      <td>100 тыс. – 10 млн, до 1 ТБ</td>
      <td>1 ТБ – 1 ПБ</td>
      <td>1 ГБ – 1 ТБ</td>
      <td>&lt; 1 ГБ</td>
      <td>1 ГБ – 1 ТБ</td>
      <td>&lt; 1 ГБ</td>
      <td>1 ГБ – 1 ТБ</td>
      <td>1 ТБ – 1 ПБ</td>
      <td>1 ГБ – 1 ТБ</td>
    </tr>
    <tr>
      <td>Паттерн доступа</td>
      <td>OLTP</td>
      <td>Event Streaming + OLTP</td>
      <td>Key-Value lookup</td>
      <td>Частое чтение</td>
      <td>OLTP</td>
      <td>Частое чтение</td>
      <td>OLTP</td>
      <td>Event Streaming</td>
      <td>OLTP</td>
    </tr>
    <tr>
      <td>Консистентность</td>
      <td>Strong</td>
      <td>Strong</td>
      <td>Eventual</td>
      <td>Strong</td>
      <td>Strong</td>
      <td>Strong</td>
      <td>Strong</td>
      <td>Eventual</td>
      <td>Eventual</td>
    </tr>
    <tr>
      <td>Доступность (SLA)</td>
      <td>99.9%–99.99%</td>
      <td>99.99%</td>
      <td>99.99%</td>
      <td>99.99%</td>
      <td>99.99%</td>
      <td>99.99%</td>
      <td>99.99%</td>
      <td>99.99%</td>
      <td>99.9%</td>
    </tr>
    <tr>
      <td>Структура данных</td>
      <td>Жёсткая схема</td>
      <td>Жёсткая схема</td>
      <td>Гибкая схема</td>
      <td>Жёсткая схема</td>
      <td>Жёсткая схема</td>
      <td>Жёсткая схема</td>
      <td>Жёсткая схема</td>
      <td>Гибкая схема</td>
      <td>Гибкая схема</td>
    </tr>
    <tr>
      <td>Транзакции между объектами</td>
      <td>Да, критично</td>
      <td>Да, критично</td>
      <td>Нет</td>
      <td>Да, критично</td>
      <td>Да, критично</td>
      <td>Да, критично</td>
      <td>Да, критично</td>
      <td>Нет</td>
      <td>Нет</td>
    </tr>
    <tr>
      <td>Типовые запросы</td>
      <td>Фильтрация, агрегация</td>
      <td>Фильтрация, агрегация</td>
      <td>Поиск по ключу</td>
      <td>Поиск по ключу</td>
      <td>Фильтрация, агрегация</td>
      <td>Поиск по ключу</td>
      <td>Фильтрация, агрегация</td>
      <td>Фильтрация, агрегация</td>
      <td>Фильтрация, агрегация</td>
    </tr>
    <tr>
      <td>Бюджет</td>
      <td>Средний</td>
      <td>Средний/Высокий</td>
      <td>Дешёвый</td>
      <td>Дешёвый</td>
      <td>Средний</td>
      <td>Средний</td>
      <td>Средний</td>
      <td>Высокий</td>
      <td>Дешёвый</td>
    </tr>
    <tr>
      <td><strong>Итоговое решение</strong></td>
      <td><strong>РСУБД</strong></td>
      <td><strong>РСУБД + DWH</strong></td>
      <td><strong>Key-Value Store</strong></td>
      <td><strong>РСУБД</strong></td>
      <td><strong>РСУБД + DWH</strong></td>
      <td><strong>РСУБД</strong></td>
      <td><strong>РСУБД</strong></td>
      <td><strong>DWH (Kafka → DWH)</strong></td>
      <td><strong>РСУБД</strong></td>
    </tr>
  </tbody>
</table>

## ERD-схема

Ниже представлена диаграмма «сущность-связь» (ERD) для описанных сущностей.

![ERD-схема](./erd.png)
