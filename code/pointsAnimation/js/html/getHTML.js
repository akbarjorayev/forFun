function pointRow(row, columnHTML) {
  const html = Array(row).fill(`<div class="df">${columnHTML}</div>`).join('')

  return html.trim()
}

function pointColumn(amount) {
  const pointHTML = `<div class="point">
                      <div class="point_item"></div>
                    </div>`
  const html = Array(amount).fill(pointHTML).join('')

  return html.trim()
}

export { pointRow, pointColumn }
