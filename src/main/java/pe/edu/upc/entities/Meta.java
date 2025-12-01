package pe.edu.upc.entities;
import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "Meta")

public class Meta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMeta;

    @ManyToOne
    @JoinColumn(name = "idUsuario", nullable = false)
    private Usuario usuario;

    @ManyToOne
    @JoinColumn(name = "idRecurso", nullable = false)
    private Recurso recurso;

    @Column(name = "nombre", length = 50, nullable = false)
    private String nombre;

    @Column(name = "estado", length = 50, nullable = false)
    private boolean estado;

    @Column(name = "fechainicio", nullable = false)
    private LocalDate fechainicio;

    @Column(name = "fechafin", nullable = false)
    private LocalDate fechafin;

    @Column(name = "progreso", nullable = false)
    private double progreso;
    public Meta(){}

    public Meta(int idMeta, Usuario usuario, Recurso recurso, String nombre, boolean estado, LocalDate fechainicio, LocalDate fechafin, double progreso) {
        this.idMeta = idMeta;
        this.usuario = usuario;
        this.recurso = recurso;
        this.nombre = nombre;
        this.estado = estado;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.progreso = progreso;
    }

    public int getIdMeta() {
        return idMeta;
    }

    public void setIdMeta(int idMeta) {
        this.idMeta = idMeta;
    }

    public Usuario getUsuario() {
        return usuario;
    }

    public void setUsuario(Usuario usuario) {
        this.usuario = usuario;
    }

    public Recurso getRecurso() {
        return recurso;
    }

    public void setRecurso(Recurso recurso) {
        this.recurso = recurso;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public boolean isEstado() {
        return estado;
    }

    public void setEstado(boolean estado) {
        this.estado = estado;
    }

    public LocalDate getFechainicio() {
        return fechainicio;
    }

    public void setFechainicio(LocalDate fechainicio) {
        this.fechainicio = fechainicio;
    }

    public LocalDate getFechafin() {
        return fechafin;
    }

    public void setFechafin(LocalDate fechafin) {
        this.fechafin = fechafin;
    }

    public double getProgreso() {
        return progreso;
    }

    public void setProgreso(double progreso) {
        this.progreso = progreso;
    }
}
